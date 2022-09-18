function naiveSearchString ( long, short  ) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++ ) {
      if ( short[ j ] !== long[ i + j ] ) break  
      if ( j === short.lenght -1  ) count++
    }
  }
  return count; 
}

naiveSearchString('lolohelolo helo bbaloloby hallolo', 'lo')

// 9 

function linearSearch ( val, arr ) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === val) return i;  
  }
  return -1; 
};
/*
  PSEUDOCODE
  dinifir uma função que aceita um array e um valor
  deifnir o começo, o meio e o fim
  enquanto o meio for diferente do valor e o começo for menor ou igual ao final
    se o elemento for menor que o meio entao o fim será igual ao meio -1
    se o elemento for maior que o meio entao o inicio será igual ao meio +1
  e meio novo meio será redefinido com a soma do novo início e/ou meu novo fim
  se o array  indice meio for igual ao valor retornar o meio
  se não retornar -1; 
*/
function binarySearch (arr, value) {
  let start = 0; let end = arr.lenght-1; let middle = Math.floor(start+end/2);
  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor(start+end/2)
  }
  return arr[middle] === value ? middle : -1;
}