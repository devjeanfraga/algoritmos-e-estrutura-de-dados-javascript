function reverse (arr) {
  if(!arr) return undefined;
  let size = arr.length-1;
  for (let i = 0; i < (size/2); i++) {
    let temp =  arr[i];
    arr[i] =  arr[size-i];
    arr[size-i] = temp; 
  }
  return arr; 
}
console.log(reverse([1,2,3,4,5])); //[ 5, 4, 3, 2, 1 ]