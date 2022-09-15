// retornar a divisão da quantidade index numeros positivos, negativos e zeros pelo tam do arr, tendo 6 casas decimais após a virgula;
// input é um array de números 
// os elementos devem ser -100 <= n <= 100; 
// o tamanho deve ser  0 < size <= 100;
function plusMinus (array) {
  if (!array.length) return undefined;
  if (array.length > 100) return null;
  let p = 0,n = 0,z = 0;
  
  const sign = (x) => ((x>0)-(x<0)) || +x; 

  function helper (arr = array) {
       if (arr.length >= 1) {
          if (sign(arr[0]) === 1)  p+= 1;
          if (sign(arr[0]) ===-1)  n+= 1;
          if (sign(arr[0]) === 0)  z+= 1;
          helper(arr.slice(1));
       }
       return [p,n,z]
  }
  
  let size = array.length;
  let counters = helper(); 
  
  for (let i = 0; i < counters.length ; i++) {
     console.log((counters[i]/size).toFixed(6)) 
  }
  
}

const nums = [1,-9,20,0,-3,-5,9,4]
plusMinus(nums)