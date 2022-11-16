function fibonacciSumPair (n) {
  if (n <= 2) return 1;
  let fibNums =  [0,1,1];
  let sum = 0; 

  for (let i = 3; i <= n; i++) {
    let currValFib = fibNums[i-1] + fibNums[i-2];
    if (currValFib > n ) break; 
    else fibNums[i] = currValFib; 
    if (fibNums[i] % 2 === 0 ) sum += fibNums[i];
  }
  return sum; 
}

console.log(fibonacciSumPair(40));