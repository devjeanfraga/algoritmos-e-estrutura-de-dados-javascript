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

