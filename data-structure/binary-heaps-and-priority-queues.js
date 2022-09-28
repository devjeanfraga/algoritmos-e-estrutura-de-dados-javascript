class MaxBinaryHeaps {
  constructor () {
    this.values = [40,39,35,38,31,24,30,19,32];
  }

  swap (arr, a,b) {
    let temp = arr[a]; 
    arr[a] = arr[b];
    arr[b] = temp;
  }
  insert (element) {
    this.values.push(element);
    this.bubbleUp();
    return this;
  }
  bubbleUp () {
    let index = this.values.length-1;
    const element = this.values[index];
    while (index > 0 ) {
      let parentIdx = Math.floor((index-1)/2);
      let parent =  this.values[parentIdx]; 
      if (element <= parent) break;
      this.swap(this.values, parentIdx, index);
      index = parentIdx;
    }
  }
  extractMax () {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0 ) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown () {
    let i= 0;
    const helper = ( isSwap = true) => {
      if(!isSwap) return
      let el = this.values[i];
      let leftIdx = Math.floor((i*2)+1), 
          rightIdx = Math.floor((i*2)+2);
      let leftChild = this.values[leftIdx] ?? undefined, 
          rightChild = this.values[rightIdx] ?? undefined; 
        
      if (el < leftChild || el < rightChild) 
          leftChild > (rightChild ?? - Infinity)  
            ? (isSwap = this.swap(this.values, i, leftIdx), i = leftIdx)
            : (isSwap = this.swap(this.values, i, rightIdx), i = rightIdx)
      else isSwap = false;
        
      helper(isSwap);   
    }
      return helper()
  }
}

let heaps = new MaxBinaryHeaps()
console.log(heaps.extractMax());
console.log(heaps.extractMax());
console.log(heaps.extractMax());
console.log(heaps.extractMax());
console.log(heaps.extractMax());
console.log(heaps.extractMax());
console.log(heaps.extractMax());
console.log(heaps.extractMax());
console.log(heaps.extractMax());
console.log(heaps.extractMax());
// heaps.extractMax();
//       40
//    39    35
//  38 31 24 30
//19 32
// [40,39,35,38,31,,24,30,19,32]
// [39,38,35,32,31,24,30,19]
// [38,32,35,19,31,24,30]
// [35,32,30,19,31,24]
// [32,31,30,19,24]
// [31,24,30,19]
// [30,24,19]
// [24,19]
// [19]
// undefined


class Node {
  constructor (value, priority) {
    this.value =  value;
    this.priority = priority; 
    this.time =  Date.now(); 
  }
}

class PriorityQueue {
  constructor () {
    this.values = [];
  }

  swap(arr, idx1, idx2 ) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp; 
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    if(this.values.length > 1) this.bubbleUp();
    //console.log(this.values);
    return this; 
  }
  bubbleUp () {
    let i = this.values.length-1, el;

    const helper =  (index = i) => {
      if (index > 0 ) el = this.values[index];
      else return;

      let parentIndex = Math.floor(index-1/2), parent = this.values[parentIndex]; 

      if (el.priority < parent.priority) (this.swap(this.values, index, parentIndex), index = parentIndex);
      else  return;

      helper(index); 
    };
    helper(); 
  }
  dequeue() {
    let priority = this.values[0];
    let end = this.values.pop();
    if(this.values.length > 0) {
      this.values[0] = end; 
      this.sinkDown();
    }
    return priority; 
  }
  sinkDown() {
    let i = 0; 
    const helper = (isSwap = true) => {
      if(!isSwap) return; 
      let elPriority =  this.values[i].priority;
      let leftIdx = Math.floor(i*2+1), 
          rightIdx = Math.floor(i*2+2);
      let leftPriority = this.values[leftIdx]?.priority, 
          rightPriority = this.values[rightIdx]?.priority;

      if (elPriority > leftPriority || elPriority > rightPriority ) {
        leftPriority < (rightPriority || +Infinity)
          ? (this.swap(this.values, i, leftIdx), i = leftIdx) 
          : (this.swap(this.values, i, rightIdx), i = rightIdx)
      } else {
        isSwap = false;
      }
      helper(isSwap); 
    }
    helper(); 
  }
}

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue("dor de cabeça", 3)
priorityQueue.enqueue("Febre", 5)
priorityQueue.enqueue("Febre Alta", 2)
priorityQueue.enqueue("Tornozelo Torcido", 2)
priorityQueue.enqueue("pedra no rim", 1)
console.log(priorityQueue.dequeue())
console.log(priorityQueue.values)
console.log(priorityQueue.dequeue())
console.log(priorityQueue.values)



/*
  sinkDown() {
    let i = 0; 
    const helper = (isSwap = true) => {
      if(!isSwap) return; 
      let elPriority =  this.values[i].priority;
      let leftIdx = Math.floor(i*2+1), 
          rightIdx = Math.floor(i*2+2);
      let leftPriority = this.values[leftIdx]?.priority, 
          rightPriority = this.values[rightIdx]?.priority;

      if (elPriority > leftPriority || elPriority > rightPriority ) {
        if (leftPriority === rightPriority) {
          this.swap(this.values, i, rightIdx) 
          i = rightIdx
        } else leftPriority < (rightPriority || +Infinity)
          ? (this.swap(this.values, i, leftIdx), i = leftIdx) 
          : (this.swap(this.values, i, rightIdx), i = rightIdx)
      } else {
        isSwap = false;
      }
      helper(isSwap); 
    }
    helper(); 
  }

*/