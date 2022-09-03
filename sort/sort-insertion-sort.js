/*
  INSERTION SORT
*/

/*
  BIG-O NOTATION 
    eficiente caso oestajamos recebendo dados de forma online em um array 
    insertionSort poderá classificar um parte da lista 
  
  time-complexity (best) =     O(n)
  time-complexity (average) =  O(n2)
  time-complextiy (worst) =    O(n2)
  space-complexity =           O(1)

*/

function insertionSort (arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i]

    for (var j = i -1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
    }

    arr[j+1] = currentVal
  }
  console.log("Retorno do Array: " + arr)
  return arr 
}

insertionSort([2,1,9,76,5])

/*
    O for faz a validação da expressão "j--" no final de cada iteração,
    ou seja, ao chamar o j fora do for ele estará decrementado
    e é essa a razáo para incrementá-lo e atribuir o valor de currentval
*/

/*


-----FOR-1-----
ARRAY: 2,1,9,76,4
CURRENTVAL: 1
-----FOR-2-----
ARRAY2,1,9,76,4
FOR-J+1-ANTES: 1
FOR-J: 2
FOR-J+1-DEPOIS: 2
ARRAY: 2,2,9,76,4
-----FOR-1-----
ARR[J+1]: 1 ARRAY: 1,2,9,76,4 
-----FOR-1-----
ARRAY: 1,2,9,76,4
CURRENTVAL: 9
-----FOR-1-----
ARR[J+1]: 9 ARRAY: 1,2,9,76,4 
-----FOR-1-----
ARRAY: 1,2,9,76,4
CURRENTVAL: 76
-----FOR-1-----
ARR[J+1]: 76 ARRAY: 1,2,9,76,4
-----FOR-1-----
ARRAY: 1,2,9,76,4
CURRENTVAL: 4
-----FOR-2-----
ARRAY1,2,9,76,4
FOR-J+1-ANTES: 4
FOR-J: 76
FOR-J+1-DEPOIS: 76
ARRAY: 1,2,9,76,76
-----FOR-2-----
ARRAY1,2,9,76,76
FOR-J+1-ANTES: 76
FOR-J: 9
FOR-J+1-DEPOIS: 9
ARRAY: 1,2,9,9,76
-----FOR-1-----
ARR[J+1]: 4 ARRAY: 1,2,4,9,76 
Retorno do Array: 1,2,4,9,76  
*/