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
}

//       40
//    39    35
//  38 31 24 30
//19 32
// [40,38,35,32,31,24,30,19]
// [40,39,35,38,31,24,30,19,32]
let heaps = new MaxBinaryHeaps()

heaps.insert(39);