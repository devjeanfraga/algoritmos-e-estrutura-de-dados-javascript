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

function solution(s) {
  let middle = 5;
  let diff, cost = [];
  let current, sum = 0;

  // const sumHelper = ( arr, j, k) => {
  //   let res;
  //   if (k % 2 === 0 ) {
  //   !arr[j][k+1] && !arr[j][k+2]
  //     ? res = (arr[j][k] + arr[j][k-1] + arr[j][k-2]) 
  //     : (res = arr[j][k] + arr[j][k+1] + arr[j][k+2])      
  //   } else res = arr[j][k] + arr[j][k+1] + arr[j][k-1]
  //   return res;
  // }
  
 // HANDLE MIDDLE SQUARE
  if (s[1][1] !== middle ) {
    current = s[1][1];
    s[1][1] = middle;
    diff = s[1][1] - current;      
    cost.push(Math.abs(diff));
  };


 for (let i = 0; i < 3; i++ ) {
  if(i % 2 === 0 ) {
    if ( s[0][i] % 2 === 0 ) {
      if(s[0][i] === (5 + 3 || 5 - 3) ) {
        let newEnd = 5 + 1 
        s[0][2] === newEnd ? s[0][2] : newEnd =  5 - 1;
        s[0][2] === newEnd ? s[0][2] : s[0][2] = newEnd; 
      } else {
        let newstart =  5 + 1;
        s[0][i] === newstart ? s[0][i] : newstart =  5 - 1;
        s[0][i] === newstart ? s[0][i] : s[0][0] =  newstart; 
      }   
    } else { //SE O VALOR FOR IMPAR
      let arr = s[0]
      if (i === 0 && arr[i] === arr[i+2]) {
        arr[i] = arr[i] + 1;
        arr[i+2] = arr[i+2] - 1;
        arr[i+2] === 0 ? arr[i+2] = arr[i+2] + 4: arr[i+2];
        
      } else if (i % 2 === 0) (s[0][i] < 9 && s[0][i] >= 1) ? s[0][i] = s[0][i] + 1 : s[0][i] = s[0][i] - 1;
    }
  }
}
  
  return s;
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