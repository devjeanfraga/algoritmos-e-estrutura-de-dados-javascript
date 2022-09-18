/*
  MERGE SORT 


  ---Big-O Notation---

  Time commplexity(Best) - O(n logn )
  Time commplexity(Average) - O(n logn )
  Time commplexity(Worst) - O(n logn )
  Space commplexity - O(n)

*/

function merge (arr1, arr2) {
  let result = []
  let i = 0, j = 0;

  // Enquanto os indices forem menores que o tamanho dos array  
  while ( i < arr1.length && j < arr2.length ) {
    // faz-se a verificação para saber qual o menor e adicionar ao array de resultado
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]); 
      i++;
    }
    else {
      result.push(arr2[j])
      j++
    }  
  }
  // Ao terminar o loop e um array automáticamente náo há o que comparar com o segundo ou vice e versa
  // Então dá-se push nos elementos restantes. 
  while ( i < arr1.length) {
    result.push(arr1[i])
    i++
  }

  while ( j < arr2.length) {
    result.push(arr2[j])
    j++
  }
  return result 
}

/*
  A chamada funciona com os arrays desordenados, 
  mas seria mais interessante se os arrays entrassem já ordenados.
  E isso é feito a parttir do fato de que uma lista de 0 ou um elemento já está classicada.
  merge([0.6,200], [1,2,3,5,6])
  merge([1,2,3], [0.6,] )
*/


function mergeSort (arr) {
  /**** BASE CASE ****/
  if (arr.length <= 1 ) return arr;

  let middle =  Math.floor(arr.length/2);
  let left =  mergeSort( arr.slice(0,middle) );
  let right = mergeSort( arr.slice(middle) );
  const res = merge(left, right)
  //console.log(res)
  return res 
}

mergeSort([0.6,200,1,55,88,5,4])