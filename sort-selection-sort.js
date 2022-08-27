/*
  SELECTION SORT 
*/

/*
  Big-O Notation
  Complexidade de tempo ao quadrado, 
  Não é muito eficiente pq temos que comparar todos os elementos 
  com todos os outros elementos da matriz 
  
  time-complexity (best) =     O(n2)
  time-complexity (average) =  O(n2)
  time-complextiy (worst) =    O(n2)
  space-complexity =           O(1)

*/

/*
  VANTAGENS 
  Existe apenas um possível cenário em que o selection sort 
  pode ser mais eficiênte que ,tipo, o bubble sort, que é: 
  Se por algum motivo desejo minimizar o número de swaps. 

  DIFERENÇAS
   No bubble sort estamos fazendo swaps repedidamente até obter 
   o maior item no final da lista. 
   No selection sort fazemos muitas comparações mas apenas uma troca
   ao final de cada loop.  

*/
const swap = ( arr, left, right ) => [arr[left], arr[right]] =  [arr[right], arr[left]];
const swap2 = (arr, left, right) => {
  let temp =  arr[left];
  arr[left] = arr[right];
  arr[right] =  temp;
}

function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i 
    for (let j = i+1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j
      }
    }
    if (i !== lowest) swap(arr, i, lowest )
  }
  console.log(arr)
  return arr
}


selectionSort([0,2,34,22,10,19,17]);