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
    return Math.abs(total); 
  }

  // _division_hash (key) {
  //   let total = 0;

  // }
  set (key, value) {
    let index = this._hash(key);
    if(!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key,value]);
  }

  get (key) {
    let index = this._hash(key);
    let box = this.keyMap[index]
    for (let i = 0; i < this.keyMap.length; i++)  {
      if (box[i][0] === key) return box[i][1]
    }
    return undefined;
  }

  getKeys (arr = this.keyMap) {
    let keys = [];
    for (let i = 0 ; i < arr.length ; i++) {
      if (Array.isArray(arr[i])) keys = keys.concat(this.getKeys(arr[i]));
      else if (arr[i] && i === 0 ) keys.push(arr[i]);
    }
    return keys;
  }

  getValues (arr = this.keyMap) {
    let values = [];
    for (let i = 0 ; i < arr.length ; i++) {
      if (Array.isArray(arr[i])) values = values.concat(this.getValues(arr[i]));
      else if (arr[i] && i === 1 ) values.push(arr[i]);
    }
    return values;
  }

}

/*
As tabelas de hash são coleções de pares de valores-chave

As tabelas de hash podem encontrar valores rapidamente com uma chave

As tabelas de hash podem adicionar novos valores-chave rapidamente

As tabelas de hash armazenam dados em uma grande matriz e funcionam com hash das chaves

Um bom hash deve ser rápido, distribuir as chaves uniformemente e ser determinístico

O encadeamento separado e a sondagem linear são duas estratégias usadas para lidar com duas chaves com hash para o mesmo índice

Na dúvida, use uma tabela de hash!

*/