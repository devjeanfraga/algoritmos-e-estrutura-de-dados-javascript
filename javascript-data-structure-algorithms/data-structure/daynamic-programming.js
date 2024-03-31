// Fibonacci Fn= Fn-1 + Fn-2;

function noDynamicFibonacci (n) {
 if (n <= 2 ) return 1; 
 return noDynamicFibonacci(n-1) + noDynamicFibonacci(n-1); 
}

/* MEMOIZATION */
function dynamicfibonacci (n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = dynamicfibonacci(n-1) + dynamicfibonacci(n-2);
  memo[n] = res;
  return res;
}

/* TABULATION */

function fibonacciTabulation (n) {
  if (n <=2) return 1;
  let fibNums = [0,1,1]
  for (let i = 3; i <= n;  i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }
  return fibNums[n]; 
}

function daynamicFactorial (n) {
  let factorNums = [0,1,2];
  if (factorNums[n] !== undefined) return factorNums[n]
  for (let i = 2; i <= n; i++) {
    factorNums[i] = i * factorNums[i-1];
  }
  return factorNums[n];
}