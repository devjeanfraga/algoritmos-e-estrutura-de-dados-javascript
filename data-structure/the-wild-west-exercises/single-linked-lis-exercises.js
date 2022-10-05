class Node {
  constructor (val) {
    this.val = val;
    this.next = null; 
  };
};

class SingleLinkedList {
  constructor () {
    this.head = null;
    this.tail = null; 
    this.size = 0;
  };

  push (val) {
    let newNode = new Node(val); 
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail =  newNode; 
    }
    ++this.size;
    return this; 
  };

  pop () {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail =  current; 

    while (current.next !== null) (newTail = current, current = current.next )

    this.tail = newTail;
    this.tail.next = null; 
    --this.size;
    
    if (this.size === 0) {
      this.head = null;
      this.tail = null; 
    }
    return current; 
  };

  shift () {
    if (!this.head) return undefined;
    let shiftted =  this.head; 
    this.head = shiftted.next; 
    shiftted.next = null; 
    --this.size;
    if (this.size === 0 ) (this.head = null, this.tail = this.head)
    return shiftted; 
  }

  unshift (val) {
    let newNode = new  Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    ++this.size;
    return this; 
  }

  get (index) {
    //verificar se o index está entre o tamanho da lista;
    if (index < 0 || index >= this.size) return null;

    let current = this.head; 
    let counter  = 0; 

    while (index !== counter) {
      current = current.next
      counter++;
    }

    return current; 
  }

  set (index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true; 
    }
    return false; 
  }

  insert (index, val) {
    if (index < 0 || index >= this.size) return null;
    if (index === 0 ) return !!this.unshift(val);
    if (index ===  this.size) return !!this.push(val);

    let newNode = new  Node(val);
    let frontNode = this.get(index-1);
    let temp = frontNode.next;
    frontNode.next = newNode;
    newNode.next = temp; 
    ++this.size;
    return true; 
  }

  reverse (qty) {
    let node = this.head;
    this.head = this.tail;
    this.tail =  node;
    let previous = null, next; 
    for (let i = 0; i < this.size; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
  }
};

// 1,2,3,4,5
// 5,3,4,1,2