class Node {
  constructor (value, priority) {
    this.value = value;
    this.priority=  priority; 
  }
}

class PriorityQueue {
  constructor () {
    this.values  = [];
  }
  swap (arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] =  temp;   
  }

  enqueue (value, priority) {
    let newNode = new Node(value, priority); 
    this.values.push(newNode);
    if (this.values.length > 1) this.bubbleUp(); 
    return this; 
  }

  bubbleUp () {
    let  i = this.values.length-1; 
    let el; 

    const helper =  () => {
      if (i > 0 ) el = this.values[i].priority;
      else return; 
      let parentIdx = Math.floor(i-1/2);
      let parent = this.values[parentIdx]?.priority;
      
      if (el < parent) {
        this.swap(this.values, i, parentIdx);
        i = parentIdx;
      } else return; 
      helper(i);
    }
    helper()
  }
}