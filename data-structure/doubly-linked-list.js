class Node {
  constructor (value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  push (value) {
    let newNode = new Node(value); 
    if (this.length === 0 ) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // Old tail; 
      newNode.prev = this.tail;
      this.tail = newNode; // New tail;
    }
    this.length++
    return this; 
  }

  pop () {
    if (this.length === 0 ) return undefined;
    let poppedNode = this.tail;

    if (this.length === 1 ) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null; 
      poppedNode.prev =  null; 
    }
    this.length--;
    return poppedNode; 
  }

  /*
    PSEUDOCODE

    -if length is 0 return undefined;
    -store the curent head property in a variable (we can call old head)
    - if the length is 1 
      -set head to null 
      -set the tail to null
    - update de head to be the next of the old head
    - set the head's prev property to be null
    - set the old next head to be null
    - decrement
    -return hear
  */
  shift () {
    if ( this.length === 0 ) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null; 
      this.tail = null; 
    } else  {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null; 
    }
    this.length--;
    return oldHead; 
  }

  unshift (value) {
    let newNode =  new Node(value);
    if (this.length === 0 ) {
      this.head = newNode; 
      this.tail = newNode; 
    } else {
      //newNode.prev = null, gap: o newNode.prev já é null por padrão. 
      this.head.prev = newNode;
      newNode.next = this.head; 
      this.head = newNode; 
    }
    this.length++;
    return this; 
  }

  get ( index ) {
    if ( index < 0 || index >= this.length ) return null;
    let middle = Math.floor(this.length/2); 
    let current, counter;
    if (index <= middle ) {
      current = this.head;
      counter = 0;
      while (index !== counter) {
        current = current.next;
        counter++
      }
  } else {
    current = this.tail;
    counter = this.length-1;
      while (index !== counter ) {
        current = current.prev;
        counter--
      }  
    }
    return current;
  }

  set (index, value) {
    let isFound  = this.get(index);
    if (isFound) isFound.value = value;
    return !!isFound;  
    //let isFound  = this.get(index);
    //isFound ? isFound.value = value : false;
    //return !!isFound;  
  }

  insert (index, value) {
    if ( index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length-1) return !!this.push(value);

    let newNode = new Node(value);
    let beforeNode = this.get(index-1);
    let afterNode =  beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode; 

    this.length++;
    return true; 
  }

  remove (idnex) {

  }

  printList () {
    if (this.length === 0 ) return undefined; 
    let list = [];
    let current = this.head; 
    while (current) {
      list.push(current.value)
      current = current.next; 
    }
    return list; 
  }
}
