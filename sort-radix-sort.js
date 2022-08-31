/*
  Pegar o digito | GetDigit
*/
const getDigit  = (num, i) =>  console.log( Math.floor(Math.abs(num) / Math.pow(10, i)) % 10)
getDigit(7323,3)


