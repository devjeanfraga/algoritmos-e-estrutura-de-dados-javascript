// Find available schedules in daily bounds; 
// Assume the duration will awals 30 min;
// the Schedule must is between both daily bounds 

let ar1 = [['09:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']]
let ar2 = ['09:00', '20:00 ']
let ar3 = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']]    
let ar4 = ['10:00', '18:30']
let duration = 30; 

let schedules = [
    [['09:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']],
    ['09:00', '20:00'],
    [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']],
    ['10:00', '18:30'],
    30
];

function findAvailableSchedules(schedules) {
    
    let blocks = [], dBounds = [], res = [];
    let inputsList = arguments.length > 1 ? arguments : schedules ;
    const duration = inputsList.pop();
    
    for (let val of inputsList ) {
        typeof val[0] === "string" ? dBounds = dBounds.concat([val]) : blocks = blocks.concat(val)
    }; 

    var bounds = makeBounds(dBounds);
    sortedBlocks = mergeSort(blocks);
    mergedHours = margeHours(sortedBlocks);
    
    for (let i = 0; i < mergedHours.length-1; i++) {
        let startTime = mergedHours[i][1], endTime = mergedHours[i+1][0];
        let intervalTime = formatHours(startTime, endTime);
        if (startTime !== endTime) res.push([...intervalTime]); 
    };

    let { heads, tails } = getExtremeSchedules(mergedHours, duration, bounds); 
    if (heads.length) res =  [ ...res, ...tails];
    if (tails.length) res =  [ ...res, ...tails];
    
    return res;
};

function makeBounds (arr) {
    let start = -Infinity;
    let end = Infinity;
    
    arr.map(el => start = Math.max( start, el[0].split(':').join('')));
    arr.map(el => end = Math.min( end, el[1].split(':').join('')));
    
    return {start, end}; 
};
    

// SORT 
function helperMergeSort (arr1, arr2) {
    let result = [];
    let i = 0, j = 0; 
    while ( i < arr1.length && j < arr2.length) {
        
        if (arr2[j][0] > arr1[i][0]) (result.push(arr1[i]), i++);
        else ( result.push(arr2[j]), j++ );     
    }

    while( i < arr1.length) (result.push(arr1[i]), i++); 
    while( j < arr2.length) (result.push(arr2[j]), j++); 

    for (let  i = 0; i < result.length-1; i++) {
        if (result[i+1][0] === result[i][0]) {
            if (result[i+1][1] < result[i][1]){
                let temp = result[i]
                result[i] = result[i+1];
                result[i+1] = temp;  
            }
        }
    };


    return result; 
}; 

function mergeSort (arr) {
    if (arr.length <= 1) return arr; 
    let middle = Math.floor(arr.length / 2); 
    let leftSide = mergeSort( arr.slice(0,middle) ); 
    let rightSide = mergeSort( arr.slice(middle) );
    let result = helperMergeSort(leftSide, rightSide); 
    return result; 
}

function margeHours (arr) {
    let list = []; res = [];
    let curr; 
    
    for (let el of arr ) {
        list.push([parseNumber(el[0]), parseNumber(el[1])])
    };

    first: for(let i = 0; i < list.length; i++) {
        curr = list[i][1], merged = Infinity;
        let nextArr = list.slice(i+1);
        
        for(let j = 0; j < nextArr.length; j++){
            if ( curr > nextArr[j][0] ) { 
                merged = Math.min( merged, nextArr[j][1] ); 
                res.push([list[i][0], merged.toString()]);
                 
            } else if (curr === nextArr[j][0] ){
                res.push(nextArr[j]);
                
            } else continue first; 
        };
    };
  
    return res; 
};

function parseNumber (param) {
    return param.split(':').join('')
}

function formatHours (params) {
    let result = [];
    let inputs =  Array.isArray(params) ? params : arguments; 
    for (let val of inputs) {
        val = val.split('');
        val.splice(2,0,':');
        result.push(val.join(''));
    } 
     return result;    
}

function getExtremeSchedules (arr, time, limits, format = formatHours) {
    let heads = [], tails = [];
    var firstEl = parseInt(arr[0]);
    var lastEl = parseInt(arr[arr.length-1][1]);

    if ( firstEl + time >= limits.start) {
        let startTime = firstEl.toString() , 
            endTime = (firstEl + time).toString();
        let availablehour = [...format(startTime , endTime)]; 
        heads.push(availablehour);
    }; 
    
    if ( lastEl + time <= limits.end) {
        let startTime = lastEl.toString() , 
            endTime = (lastEl + time).toString(); 
        let availablehour = [...format(startTime , endTime)];
        tails.push(availablehour); 
    }; 

    return { heads, tails };
}
 
console.log(findAvailableSchedules(schedules)); //ar1,ar2,ar3,ar4,duration

// [
//   ['11:30', '12:00']
//   ['15:00', '16:00']
//   ['18:00', '18:30']
// ]