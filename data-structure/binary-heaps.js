class MaxBinaryHeaps {
  constructor () {
    this.values = [40,38,35,32,31,24,30,19];
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

const helper = (i=0, el, isSwap = true) => {
    if(!isSwap) return;
    el = this.values[i];
    let leftIdx = Math.floor(i*2+1); 
    let rightIdx = Math.floor(i*2+2);
    let leftChild = this.values[leftIdx];
    let rightChild = this.values[rightIdx];
    
    if (leftChild > rightChild) {
      if (el < leftChild ) {
        isSwap = this.swap(this.values, i,leftIdx) ; 
        i = leftIdx;
      } else {
          isSwap = false
      } 
    } else {
      if (el < rightChild ) {
        isSwap = this.swap(this.values, i,rightIdx) ;
        i = rightIdx;
      } else {
          isSwap = false
      }
    }
    el = this.values[i]

    return helper(i,el, isSwap) ;
    
   
}
return helper()
}
}

//       40
//    39    35
//  38 31 24 30
//19 32
// [40,38,35,32,31,24,30,19]
// [40,39,35,38,31,24,30,19,32]
let heaps = new MaxBinaryHeaps()

heaps.extractMax();