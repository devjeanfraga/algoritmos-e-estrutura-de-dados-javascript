/*
  BUBBLE SORT 
*/

/*
  BIG-O NOTATION  
    O(n) para listas quase ordenadas
    O(n2)  para listas não ordenadas, por conta do aninhamento de loops 


  time-complexity (best) =     O(n)
  time-complexity (average) =  O(n2)
  time-complextiy (worst) =    O(n2)
  space-complexity =           O(1)
*/

const sortItems = ( a, b ) => a -b;
const arrayUnsort = [3,7,90,2,9,6,1];
const res = arrayUnsort.sort(sortItems)
console.log(res)

/*
  Bubble Sort 
  eficiente para entrada de dados QUASE ORDENADA 
*/


/*
  Requisitos 
   - Swap | Trocar  
*/

const swap1 = (arr, idx1,idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
const swap2 = (arr, idx1,idx2) => {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}


function bubbleSort (arr) {
  let isSwap
  for (let i = arr.length; i > 0; i--) {
    isSwap = false;
    for (let j = 0; j < i-1 ; j++) {
      if (arr[j] > arr[j+1]) 
        swap2(arr, j, j+1)
        isSwap = true 
    }
    if (isSwap) break; 
  }
  console.log(arr)
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);


/*
  Cocktail Shaker Sort
    This algorithm extends Bubble Sort by operating in two directions.
    Instead (em vez de) going from the start to finish, and repeat that,
    ist goes from start to finish, and then from finish to start again in a
    single full interation. 

    Esse algoritmo estende o Bubble Sort operando em duas direções. 
    Em vez de ir do início ao fim e repetir isso, vai do início ao fim e 
    depois do fim ao início novamente, em uma única iteração completa. 
    Efetivamente, ele realiza o dobro do trabalho do Bubble Sort em uma 
    única iteração completa, embora na prática ele normalmente não execute 
    duas vezes mais rápido.

*/

function cocktailShakerSort(inputArr) {

  let n = inputArr.length;
  let sorted = false;

  while (!sorted) {
      sorted = true;
      for (let i = 0; i < n - 1; i++) {
          if (inputArr[i] > inputArr[i + 1]){
             let tmp = inputArr[i];
             inputArr[i] = inputArr[i + 1];
             inputArr[i+1] = tmp;
             sorted = false;
          }
 }

 if (sorted)
     break;
 sorted = true;

      for (let j = n - 1; j > 0; j--) {
          if (inputArr[j-1] > inputArr[j]) {
              let tmp = inputArr[j];
              inputArr[j] = inputArr[j + 1];
              inputArr[j+1] = tmp;
              sorted = false;
          }
      }
  }
  return inputArr;
}

