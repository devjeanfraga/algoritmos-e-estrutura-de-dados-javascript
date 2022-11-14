
function freq (arr) {
  const freq =  new Map();
  for (let val of arr) freq.set(val, (freq.get(val) || 0) + 1); 
  return Array.from(freq.values())

}

freq([9,9,9,9,9,2,2,2,4,4,3]); //[5,3,2,1]


