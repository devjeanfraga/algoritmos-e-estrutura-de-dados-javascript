/*** Verificar se o número no arr2 é o quadrado do arr1 ***/

const a1 = [1, 2, 3, 35 ]
const a2 = [1, 4, 9, 25]


function frequencyPattern ( arr1, arr2) {
  if (arr1.length !== arr2.length){
    console.log(-1)
    return -1;
  }
  
  let obj1 = {}, obj2 = {};

  for ( let value of arr1 ) {
    obj1[value] = ( obj1[value] || 0 ) + 1;
  }

  for (let value of arr2 ) {
    obj2[value] = ( obj2[value] || 0 ) + 1;
  }

  for ( let key in  obj1 ) {
    if ( !(key**2 in obj2 ) ) {
      console.log("A chave não existe no objeto 2")
      return false
    } 
    
  }
  console.log('true')
  return true
}
//frequencyPattern( a1, a2)


/*** Verificar se a string é um anagrama da outra. ***/ 

function isAnagrama (word1, word2) {
    if (word1.length !== word2.length) {
      console.log("O tamanho das palavras são diferentes")
    }

    word1.split('')
    word2.split('')

    let obj1 = {}
    let obj2 = {}

    for ( let value of word1 ) {
      obj1[value] = (obj1[value] || 0 ) + 1;
    }

    for ( let value of word2 ) {
      obj2[value] = (obj2[value] || 0 ) + 1;
    }

    for (let key in obj1 ) {
      if ( !(key in obj2) ) {
        console.log("Essa chave não existe no obj2: false")
        return false;
      }

      if( obj2[key] !== obj1[key]) {
        console.log( "não tem o mesmo numero de contagem:  false")
      }
    }

    console.log(true)
    return true; 
}

var w1 = "Jennnn"
var w2 = "Jennnn"

//isAnagrama(w1, w2)

function isAnagrama2 (word1, word2) {
  if( word1.length !== word2.length) {
    console.log("false")
    return false 
  }


  let obj = {}
  for(let i = 0 ; i <= word1.length ; i++) {
    let letter = word1[i];
    obj[letter] ? obj[letter] += 1 : obj[letter] = 1; 
    console.log(obj)
  }

  for(let i = 0;  i <= word2.length ; i++) {
      let letter = word2[i];
      console.log(obj)

      if( !obj[letter] ) {
        console.log("essa letra não existe na word1")
        return false;
      } else {
        obj[letter]-= 1;
        console.log(obj)
      }
  }

  console.log(true);
  return true;
}

//isAnagrama2(w1,w2)


/*** Contar o número de valores dentro de um array com valores repetidos ***/

function countUniqueValues (arr) {
  if (arr.length === 0 ){
    console.log(false)
    return false;
  }

  let i = 0;
  
  for (let j = 1 ; j < arr.length ;  j++) {
    
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }

  }  
    console.log(i+1)
    return i + 1; 

}

//countUniqueValues([3,3,3,3,9,9,9,9,10,15,15,15,15,20,20, 20, 99, 150, 150, 150])

/*        
                  i  
[3,9,10,15,20,99,150,9,10,15,15,15,15,20,20, 20, 99, 150, 150, 150]
                                                                j 
*/                         


/***  SLIDING WINDOW - VALORES NÃO ORDENADOS ***/

function maxSubArraySum (arr, num) {
  let maxValue = 0;
  let maxValTemp =  0;
  //verifica se o array de input é menor que o input inteiro;  
  if (arr.length < num ) { 
    return null
  }

  for ( let i = 0 ; i < num ;  i++) {

    if( typeof arr[i] !== "number" ) {
      console.log("invalid List") 
      return "invalid List"
    }

    maxValue +=  arr[i]
  }
  
  maxValTemp =  maxValue

  for ( let  i = num ; i < arr.length ;  i++) {
    maxValTemp =  maxValTemp - arr[i-num] + arr[i]; 

    maxValue =  Math.max(maxValue, maxValTemp)

  }
  console.log(maxValue)
  return maxValue; 
}

const numeros = [1,2,4,7,5]


maxSubArraySum(numeros, 3)