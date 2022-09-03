function potencia (base, expoente) {
  if (expoente === 0 ) return 1
  return base * potencia(base, expoente - 1)
}

potencia(2, 6)

/*
2 * (2 * 5) // 2*32 = 64
  2 (2 * 4) //2*16 = 32 
      2 * (2 * 3) // 2*8 = 16
          2 * (2 * 2) // 2*4 = 8
              2 * (2 * 1) // 2*2 =  4
                  2 * (2 * 0) // 1
*/
///////////////////////////////////////////////////////////////////////

function fatorial (x) {
  if (x  < 0) return 0;
  if (x <= 1) return 1;
  return x * fatorial(x -1)
}
fatorial(4)

// 4 * (3) 6 = 24
  // 3 * (2)  = 6
      // 2 * (1) = 2

///////////////////////////////////////////////////////////////////////

function produtoDoArray ( arr ) {
  if (arr.length  === 0 ) return 1
  return arr[0] * produtoDoArray(arr.slice(1))
}

produtoDoArray([1,2,3,10])

///////////////////////////////////////////////////////////////////////

function recursiveRange (x) {
  if (x === 0 ) return 0
  return x + recursiveRange(x-1)
}

recursiveRange(4)

//////////////////////////////////////////////////////////////////////

function fibonacci (x) {
  if (x <= 2) return 1

  return fibonacci(x-1) + fibonacci(x-2)
}

fibonacci(35)