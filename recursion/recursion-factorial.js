

function recursionFactorialDaynamic (n) {
  let memo = [0,1,2];
  function helper (n) {
    if (memo[n] !== undefined) return memo[n]
    let res = helper(n-1) * n;
    memo = memo.concat(res);
    //console.log(memo)
    return res;
  }
  helper(n);
  return memo[n]; 
};
console.log(recursionFactorialDaynamic(9)); //362880


function tabulationFactorial (n) {
  let factorNums = [0,1,2];
  if (factorNums[n] !== undefined) return factorNums[n]
  for (let i = 2; i <= n; i++) {
    factorNums[i] = i * factorNums[i-1];
  }
  return factorNums[n];
};

console.log(tabulationFactorial(11))


function factorial (x) {
  if(x < 0) return 0;
  if(x <=1) return 1;
  return x * factorial(x-1); 
};

console.log(factorial(5)); //120
