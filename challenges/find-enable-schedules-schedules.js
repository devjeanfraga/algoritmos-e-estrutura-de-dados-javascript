let ar1 = [['09:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']]
let ar2 = ['09:00', '20:00 ']
let ar3 = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']]    
let ar4 = ['10:00', '18:30']
let duration = 60; 

let schedules = [
    [['09:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']],
    ['09:00', '20:00'],
    [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']],
    ['10:00', '18:30'],
    60
];


function findEnableSchedules(schedules) {
    
    let blocks = [], dBounds = [], res = [];
    let inputsList = arguments.length > 1 ? arguments : schedules;
    inputsList = [...inputsList]
    const duration = inputsList.pop();
    
    for (let val of inputsList ) {
        typeof val[0] === "string" ? dBounds = dBounds.concat([val]) : blocks = blocks.concat(val);
    };

    var bounds = makeBounds(dBounds);
    let hoursToNumber = convertToNumber(blocks.flatMap(el=> el));
    
    let intHours = [];
    while (hoursToNumber.length) {
        let val =  [hoursToNumber[0],hoursToNumber[1]];
        intHours.push(val);
        hoursToNumber = hoursToNumber.slice(2); 
    };
    
    let sortedBlocks = mergeSort(intHours);
    let mergedHours = mergeHours(sortedBlocks);

    for (let i = 0; i < mergedHours.length-1; i++) {
        
        let startTime = convertToMinute(mergedHours[i][1]), 
            endTime = convertToMinute(mergedHours[i+1][0]),
            interval = endTime - startTime; 
        
        if (  interval >= duration ) {
            let availableSchedule = formatHours(mergedHours[i][1], mergedHours[i+1][0]);
            res.push([...availableSchedule]);   
        };
    };

    let firstTime = mergedHours[0][0];
    let lastTime = mergedHours[mergedHours.length-1][1]
    let { head, tail } = getExtremeSchedules(firstTime,lastTime, duration, bounds);

    res =  [ ...head, ...res, ...tail];
    return res;
};

function makeBounds (arr) {
    let start = -Infinity, end = Infinity;
    
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

function mergeHours (arr) {
    let list = [...arr], 
        res = [],
        plus = 0, 
        index = 0,
        updatedList,
        isGreater, 
        curr,
        val;

    while ( index < list.length) {
        curr = list[index], merged = -Infinity;
        if(!curr) break;
        
        updatedList = list.slice(index+1);
        plus = 0; 
 
        for (let j in updatedList) {
            isGreater = curr[1] > updatedList[j][0]; 
            if ( isGreater ) ( merged = Math.max( merged, updatedList[j][1] ), plus += 1);
        };
        
        val = curr[0] && merged >= 0 ? [curr[0], merged] : curr;
        res.push(val);
        index += 1; 
        index = index + plus;
        if(!list[index]) break;
    }
    return res; 
};

function formatHours (params) {
    let result = [];
    let inputs =  Array.isArray(params) ? params : arguments; 
    for (let val of inputs) {
        val = "000" + val.toString();
        let hours = val.slice(-4).slice(0,2); 
        let minutes = val.slice(-2);
        val = `${hours}:${minutes}`;
        result.push(val);
    };
     return result;    
};

function convertToMinute ( params ) {
    params =  params.toString(); 
    const MILIHOUR = 3600000, MILIMINUTE = 60000;
    let hour = parseInt(params.slice(0,2)), minute = parseInt(params.slice(2));

    return (MILIHOUR * hour) / MILIMINUTE + minute;    
};

function getExtremeSchedules (firstEl, lastEl, duration, bounds, sum = sumHoursAndMinutes, format = formatHours) {
    let head = [], tail = [], sumTimes;
    
    /**
        Get hours that start and finish the available meeting;
    **/
    sumTimes = firstEl < bounds.start ? firstEl : sum(firstEl, duration);
    if ( sumTimes >= bounds.start && sumTimes <= bounds.end) {
        let startTime = firstEl.toString() , 
            endTime = sumTimes;
        let availablehour = [...format(startTime , endTime)]; 
        head.push(availablehour);
    }; 

    sumTimes = lastEl > bounds.end ? lastEl : sum(lastEl, duration);
    if ( sumTimes >= bounds.start && sumTimes <= bounds.end) { 
        let startTime = lastEl.toString(), 
            endTime = sumTimes; 
        let availablehour = [...format(startTime , endTime)];
        tail.push(availablehour); 
    }; 

    return { head, tail };
}; 

function sumHoursAndMinutes (param) { // return a number;

    let inputs = Array.isArray(param) ? param : arguments;
    let hours = [], minutes = [], sumHours = 0, sumMinutes = 0; 

    for(let val of inputs) {
        val = val.toString().length === 4 ? val.toString() : `000${val}`; 
        hours.push(parseInt(val.slice(-4).slice(0,2))), minutes.push(parseInt(val.slice(-2))); 
    }; 

    for (let val of minutes) sumMinutes += val;  
    hours[0] += parseInt(sumMinutes / 60);
    sumMinutes = sumMinutes % 60;  
 
    for (let val of hours ) sumHours += val % 24;
    param = `${sumHours < 10 ? "0".concat(sumHours) : sumHours}${sumMinutes < 10 ? "0".concat(sumMinutes): sumMinutes}`

    return parseInt(param); 
};

function convertToNumber (inputs) {
    let result = [], arr = []
    for (let val of inputs) {
        val = val.toString().split(':').join('');
        val = parseInt(val); 
        arr.push(val);
    }
    
    return arr; 
}; 

console.log(findEnableSchedules(schedules)); //ar1, ar2, ar3, ar4, 60



 