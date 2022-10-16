/*
magic square
the sum of column, line and diagonal are constant 
given a 3X3 matrix of integer inclusive range [1,9] 

[
 [8,3,4],
 [1,5,8],
 [6,4,2]
]

*/

function solution(arr) {
  let middle = 5;

  let diff, cost = 0;
  let temp, index;

  let pair = [middle+3, middle-3, middle+1, middle-1];
  let odd = [middle+4, middle-4, middle+2, middle-2];
  
  const indexOf = (ar, search) => {
   for (let i in ar) {
    if(ar[i] === search) return i;
    else return false;
   }
  }

 const sum = (l,k) => {
  let res;
  if (k % 2 === 0 ) {
  !arr[l][k+1] && !arr[l][k+2]
     ? res = (arr[l][k] + arr[l][k-1] + arr[l][k-2]) 
     : (res = arr[l][k] + arr[l][k+1] + arr[l][k+2])      
  } else res = arr[l][k] + arr[l][k+1] + arr[l][k-1]
  return res;
 }

 for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

      // HANDLE MIDDLE SQUARE
      if ((i === 1 && j === 1) && arr[i][j] !== middle) arr[i][j] =  middle; 
    
      // HANDLE PAIR LINES AND PAIR COLUMNS
      if (i % 2 === 0 && j % 2 === 0 ) {
        if (!pair.includes(arr[i][j])) {
          temp = arr[i][j];
          diff = 15 - sum(i,j);
          arr[i][j] = diff + temp ;
          index = indexOf(pair, arr[i][j])
          if (index) pair[index] = null;
          cost += diff;
        }
      } else {
        // HANDLE ODD LINE AND ODD COLUMNS
        if (!odd.includes(arr[i][j])) {
          temp = arr[i][j];
          diff = 15 - sum(i,j)

          if ((diff + temp)%2 === 0) (arr[i][j] = temp, diff = 0)
          else arr[i][j] = diff + temp;

          index = indexOf(odd, arr[i][j])
          if (index) odd[index] = null;

          cost += diff;
        }       
      };       
    }
  }
  return cost;
}


const matrix = [
[5,3,4],
[1,5,8],
[6,4,2]
]

const matrix2 = [
[9,3,4],
[7,5,8],
[6,9,2]
];

console.log(solution(matrix));