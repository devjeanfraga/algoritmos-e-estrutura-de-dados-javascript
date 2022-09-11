
class Node {
  constructor ( value ) {
    this.value = value;  
    this.next = null; 
  };
}


class SinglyLinkedList  {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  };
  // adiciona no final da lista 
  push (value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    };
  };
  
  // remove do final da lista
  pop () {
    if(!this.head) return undefined; 
    let current = this.head;
    let newTail =  current;

    while (current.next !== null) {
        newTail = current 
        current =  current.next 
    };

    this.tail = newTail; 
    this.tail.next = null; 
    this.length-- 
    if (this.length === 0 ) { 
      this.head = null;
        this.tail = null;
    };
    return current; 
  };

  // remove do inicio da lista
  shift () {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head =  currentHead.next;
    this.length--;
    if (this.length === 0 ) this.tail = null;
    return currentHead.value;
  };
  
  // adiciona no inico da lista
  unshift (value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail =  this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    };
    this.length++;
    return this;
  };
  
  get (index) {
    if (index < 0 || index >= this.length ) return null; 
    let current =  this.head;
    let counter = 0;
    while (index !== counter) {
      current = current.next;
      counter++; 
    };
    return current; 
  };

  set (index, value) {
    let foundNode = this.get(index);
    if (foundNode) { 
      foundNode.value = value;
      return true;
    };
    return false;   
  };

  insert (index, value) {
    if (index < 0 || index > this.length ) return false;
    if ( index === this.length ) return !!this.push(value);
    if (index === 0 ) return !!this.unshift(value);

    let newNode = new Node(value);
    let prev = this.get(index-1);
    let temp =  prev.next; 
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true; 
  };

  remove (index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length -1) return this.pop();

    let previousNode = this.get(index -1);
    let removed = previousNode.next;
    previousNode.next = removed.next; 
    this.length--;
    return removed; 
  };

  reverse () {
    let node = this.head;  
    this.head = this.tail; 
    this.tail = node; 
    let prev = null;    
    let next; 
    for (let i = 0; i < this.length; i++) {
      next = node.next;  
      node.next = prev; 
      prev = node; 
      node = next; 
    };
    return this; 
  };

  print () {
    if (this.length === 0 ) return undefined;
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value)
      current = current.next
    };
    return arr; 
  };
};



