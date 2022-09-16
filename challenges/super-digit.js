function superDigit(n, k) {
  // Get the qty of digits  
  const getNumSize = (num) => {
      if( num === 0 ) return 1;
      return Math.floor(Math.log10(Math.abs(num))) + 1 ;
  }
  // Get  the digit
  const getNum = (num, i)=> {
      return Math.floor(Math.abs(num)/ Math.pow(10, i)) % 10;
  }
  // check constraints
  if(getNumSize(n) === 1) return n; 
  if(n > Math.pow(10, 100000) || n < 1 ) return null;
  if(k > Math.pow(10,5) || k < 1 ) return undefined; 
  
  const concatenation = (number = n, digits = k) => {
      let counter = digits; 
      if (digits !== 1 ) number = number + concatenation(number, counter-1)
      console.log("p:" + number)
      return number; 
  }

  
  function helper ( p = concatenation(), size = k*k-1) {
      let data = []; let val; 
      if (size >= 0 ) {
          val = getNum(p,size);
          console.log(val)
          data.push(val);
          data = data.concat(helper(p,size-1));
      }
      return data
  }

  const sum = (arr = helper(), i = 0) => {
  if (arr.length === 1) return arr[i]  
  return  arr[i] + sum(arr.slice(1));        
  }
  
  return sum()

}
  superDigit('9875')