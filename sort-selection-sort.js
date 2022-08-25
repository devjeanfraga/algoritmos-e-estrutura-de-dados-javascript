/*
  SELECTION SORT 
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