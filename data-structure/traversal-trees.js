class Node {
  constructor (value) {
    this.value =  value;
    this.next = null;
   
  }
}

class Queue {
   constructor () {
     this.first = null;
     this.last = null;
     this.size = 0;
   }

   enqueue (value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode; 
    }
    return this.size++
   }

   dequeue () {
     if (!this.first) return undefined; 
     let oldFirst = this.first;
     if (this.size === 1)  {
        this.first = null;
        this.last = null;
     } else {
       this.first = oldFirst.next
       oldFirst.next = null; 
     }
     this.size--
     return oldFirst; 
   }

   print () {
     if(!this.first) return undefined; 
     const helperPrint = (current = this.first) => {
        let data = []
        if (current) data.push(current.value);
        if (current.next !== null) {
          data = data.concat(helperPrint(current.next))  
        } 
        return data;   
     }
     return helperPrint();
   }
}

class NodeTree {
  constructor (value) {
    this.value =  value;
    this.left = null;
    this.right = null;
  }
}

class TreeTraversal {
  constructor () {
    this.root = null; 
  }

  breathFirstSearchSolution () {
    let current = this.root,
    data = [],
    queue = new Queue();
    queue.enqueue(current)
    while (queue.size > 0) {
      current = queue.dequeue().value;
      data.push(current.value)
      if (current.left) queue.enqueue(current.left);
      if (current.right)  queue.enqueue(current.right);
    }
    return data; 
  /*
      ->  10
    ->  6    15
  ->  3  8     20
  [10,6,15,3,8,20]    
  */
  }

  depthFirstPreOrderSolution () {
    let data = [],
    current = this.root;
    function traverse (node ) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data; 
  /*
             ↓
         ↓   10  ↓
      ↓  6  ↓    15 ↓
      3     8       20
      [10,6,3,8,15,20]    
  */
  }

  depthFirstPostOrderSolution () {
    let restore = [], current  = this.root; 
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      restore.push(node.value);
    }
    traverse(current)
    return restore; 
  /*
             10  
         6   ↑  15 
      3  ↑  8   ↑   20
      ↑     ↑       ↑
    [3,8,6,20,15,10]    
  */
  }

  depthFirstInOrderSolution () {
    let restore = [], current  = this.root; 
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      restore.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current)
    return restore; 
  /*
             10  
         6   ↑  15 
      3  ↑  8   ↑   20
      ↑     ↑       ↑
     [3,6,8,10,15,20]    
  */
  }

}