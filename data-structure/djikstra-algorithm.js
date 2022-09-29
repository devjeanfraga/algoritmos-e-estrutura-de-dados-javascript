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

  dequeue () {
    let priority = this.values[0];
    let end = this.values.pop(); 
    if (this.values.length > 0) {
      this.values[0] = end; 
      this.sinkDown()
    }
    return priority; 
  }

  sinkDown () {
    let i = 0;
    const helper = (isSwap = true) => {
      if (!isSwap) return;
      let currentPriority =  this.values[i]?.priority; 
      let leftIndex =  Math.floor(i*2+1), 
      leftPriority =  this.values[leftIndex]?.priority;
      let rightIndex =  Math.floor(i*2+2),
      rightPriority =  this.values[rightIndex]?.priority;

      if(currentPriority > leftPriority || currentPriority > rightPriority) {
        leftPriority <= (rightPriority || +Infinity) 
          ? (this.swap(this.values, i, leftIndex), i = leftIndex)
          : (this.swap(this.values, i, rightIndex), i = rightIndex)
      } else isSwap =  false; 
      helper(isSwap);
    }
    helper();
  }
}