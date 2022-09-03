/*

  QUICK SORT 

*/

const swap = (arr, left, right) => [arr[left], arr[right]] = [arr[right], arr[left]];

const pivotHelper = (arr, start = 0 , end = arr.length-1 ) => {
  // Elemento pivo // pode ser qualquer posição na lista, mas aqui definimos o inicio dela.
  let pivot = arr[start]
  // Index de troca que será incrementado ao longo do loop for se a verificação for verdadeira. 
  let swapIndex = start
  
  for (let i = start+1; i <= end; i++) {
      if ( pivot > arr[i]) {
        swapIndex++
        // swap será chamado com os incremtos das posições de troca junto com o indice/elemento que está sendo iterado. 
        swap(arr, swapIndex, i)
      }
  }
  // swap será chamado com o indice da posição de inicio junto com os incremtos das posições de troca. 
  swap(arr, start, swapIndex)
  return swapIndex;
}

function quickSort (arr, left = 0 , right = arr.length-1) {
  if( left < right ) {
    const pivotIndex =  pivotHelper(arr, left, right)
    //left
    quickSort(arr, left, pivotIndex - 1)
    //right
    quickSort(arr, pivotIndex+1, right)
  }
  console.log(arr)
  return arr; 
}

quickSort([0.9,3,1,-2,10,8,5,3.5])


