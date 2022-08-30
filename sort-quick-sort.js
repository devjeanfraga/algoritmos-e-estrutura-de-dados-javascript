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




