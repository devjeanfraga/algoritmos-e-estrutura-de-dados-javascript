/*
  Pegar o digito | GetDigit
  getDigit(12345, 0) //5
  getDigit(12345, 1) //4
  getDigit(12345, 2) //3
*/
const getDigit  = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
console.log(getDigit(12345, 0))
/*
  MATH.LOG10() 
  retorna o logaritmo de base 10 de um dado número 
  se o número for = 0 o valor retornado será -infinity
  se o número for menor que zero retorna NaN 
  0-9 = 0
  10-99 = 1
  100-999 = 2
  1000-9999 = 3
  10000-99999= 4 
  Sabendo que ele retorna o logaritmo de base 10 de um dado número
  pode-se calcular o tamanho do número, somando o logaritmo com 1

  getnumSize(10)       //2
  getnumSize(100)      //3
  getnumSize(3647590)  //7
  
*/
const getNumSize = (num) => {
  if (num  === 0 ) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1; 
}

/*
  PEGAR O TAMANHO DO MAIOR NÚMERO 
*/

const getMostNumber =  (arr) => {
  let maxSize = 0;
  for (let i = 0; i < arr.length; i++) {
    sizeOfNumber = getNumSize(arr[i])
    maxSize =  Math.max(maxSize, sizeOfNumber)
  }
  return maxSize;
}



function radixSort (arr) {
  let maxSizeNumber =  getMostNumber(arr);

  for (let k = 0; k < maxSizeNumber; k++) {
    let queuesOrBuckets = Array.from( { length: 10 }, () => [] );

    for (let i = 0; i <arr.length; i++ ) {
      let digit = getDigit(arr[i], k)
      queuesOrBuckets[digit].push(arr[i])
    }
    arr = [].concat(...queuesOrBuckets)
  }
  console.log(arr)
  return arr; 
}

//radixSort([90,02,35,1000,30567,450,999])