/*
  MERGE SORT 


  ---Big-O Notation---

  Time commplexity(Best) - O(n logn )
  Time commplexity(Average) - O(n logn )
  Time commplexity(Worst) - O(n logn )
  Space commplexity - O(n)

A complexidade de tempo do Merge Sort éθ(Nlog(N)) em todos os 3 casos (pior, médio e melhor), pois o merge sort sempre divide a matriz em duas metades e leva tempo linear para mesclar as duas metades.

Espaço Auxiliar: O(N), Na classificação por mesclagem, todos os elementos são copiados em uma matriz auxiliar. Portanto, N espaço auxiliar é necessário para classificação por mesclagem.

Aplicações de classificação por mesclagem:
Classificando grandes conjuntos de dados: a classificação por mesclagem é particularmente adequada para classificar grandes conjuntos de dados devido à sua complexidade de tempo garantida no pior caso de O (n log n).
Classificação externa: a classificação por mesclagem é comumente usada na classificação externa, onde os dados a serem classificados são muito grandes para caber na memória.
Classificação personalizada: a classificação por mesclagem pode ser adaptada para lidar com diferentes distribuições de entrada, como dados parcialmente classificados, quase classificados ou completamente não classificados.

Vantagens da classificação por mesclagem:
Estabilidade : Merge sort é um algoritmo de classificação estável, o que significa que mantém a ordem relativa de elementos iguais na matriz de entrada.
Desempenho garantido no pior caso: a classificação por mesclagem tem uma complexidade de tempo de pior caso de O(N logN), o que significa que tem um bom desempenho mesmo em grandes conjuntos de dados.
Paralelizável : Merge sort é um algoritmo naturalmente paralelizável, o que significa que pode ser facilmente paralelizado para aproveitar vários processadores ou threads.

Desvantagens da classificação por mesclagem:
Complexidade de espaço: a classificação por mesclagem requer memória adicional para armazenar as submatrizes mescladas durante o processo de classificação. 
Não no local: a classificação por mesclagem não é um algoritmo de classificação no local, o que significa que requer memória adicional para armazenar os dados classificados. Isto pode ser uma desvantagem em aplicações onde o uso de memória é uma preocupação.
Nem sempre é ideal para conjuntos de dados pequenos: para conjuntos de dados pequenos, a classificação por mesclagem tem uma complexidade de tempo maior do que alguns outros algoritmos de classificação, como a classificação por inserção. Isso pode resultar em desempenho mais lento para conjuntos de dados muito pequenos.
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
