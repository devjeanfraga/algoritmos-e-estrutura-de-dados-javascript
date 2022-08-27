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
    for (let j = 0; j < i -1 ; j++) {
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





