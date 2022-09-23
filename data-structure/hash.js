class HashTable {
  constructor (size = 101) {
    this.keyMap = new Array(size)
  }

  //Hash function Colt Steele
  _hash (key) {
    let total = 0; 
    let wierd_prime = 31;
    for (let i = 0; i <= Math.min(key.length, 100); i++) {
      let char  =  key[i]
      let value = char.charCodeAt(0) - 96; 
      total =  (total * wierd_prime + value) % this.keyMap.length; 
    }
    return total; 
  }

  // _division_hash (key) {
  //   let total = 0;

  // }
}

