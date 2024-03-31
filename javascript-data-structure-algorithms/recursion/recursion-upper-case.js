function capitalizeWords (arr) {
  if( arr.length === 1) {
      return [arr[0].toUpperCase()]
  }
  let response = capitalizeWords(arr.slice(0,-1));
  response.push(arr.slice(-1)[0].toUpperCase());
  return response;
}

capitalizeWords(['jean', 'jovane', 'juliana', 'elizete', 'jair', 'miguel', 'bernardo'])