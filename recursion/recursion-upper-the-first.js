function upperTheFirst(arr) {
  if (arr.length === 1) {
      return [arr[0][0].toUpperCase() + arr[0].substring(1)]
  }
  const response = upperTheFirst(arr.slice(0, -1))
  let string =  arr.slice(arr.length -1)[0][0].toUpperCase() + arr.slice(arr.length -1)[0].substring(1)
  response.push(string);
  return response;
}

upperTheFirst(['jean', 'jovane', 'juliana', 'elizete', 'jair', 'miguel', 'bernardo'])