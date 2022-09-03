var frutas = ['abacate', 'maçã', 'melancia', 'banana', 'morango', 'manga', 'açai'];

function elParIndex (arr = []) {
  const onlyInexPairs = [];
  for (let i = 0 ; i <= arr.length ; i++) {
    if ( i % 2 === 0 ) {
      onlyInexPairs[i / 2] = arr[i]
    }
   
  }
  console.log(onlyInexPairs)
}


elParIndex(frutas)


function elImparIndex ( arr = []) {
  const onlyIndexOdd = []

  for (let i = 0; i < arr.length; i++) {
    if ( i % 2 !== 0 )
      onlyIndexOdd[Math.floor( i / 2)] = arr[i];
  }
  console.log(onlyIndexOdd)
 }

 elImparIndex(frutas);