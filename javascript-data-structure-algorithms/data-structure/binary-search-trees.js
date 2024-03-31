class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null    
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null;
  }

  insert (value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined; 
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this; 
        };
        current = current.left;
        
      } else {
        if (!current.right) {
          current.right = newNode;
          return this; 
        };
        current = current.right; 
      };
    };
  };

  insertRecursive ( value ) {
    const newNode = new Node(value);

    // Base Case
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    const inserted = (value, current = this.root) => {
      if(value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        return inserted(value, current.left)
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        return inserted(value, current.right)
      }
    }

    return inserted(value);
  }

  findWithRecursion (value, node =  this.root) {
    if (!node) return undefined; 
    if (node.value === value ) return node; 
    if (value < node ) return this.find(value, node.left)
    else return this.find(value, node.rigth)
  }; 

  findWithHelperRecursion (value) {
    const helper = (node = this.root) => {
      if (!node) return false; 
      if (node === value ) return node;
      if ( value < node) return helper( node.left );
      else return helper(node.right); 
    }

    return helper(); 
  } 
}
