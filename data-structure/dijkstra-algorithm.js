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
class WeightedGraph {
  constructor () {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(start, finish, weight) {
    this.adjacencyList[start].push({node: finish, weight });
    this.adjacencyList[finish].push({node: start, weight });
  }
  Dijkstra(start, end) {
    let nodes = new PriorityQueue(); 
    let distances = {};
    let previous = {}; 
    let priority, path = []; 

    //INITIAL STATE
    for (let vtex in this.adjacencyList) {
      if (vtex === start ) (distances[vtex] = 0, nodes.enqueue(vtex, 0));
      else (distances[vtex] = Infinity, nodes.enqueue(vtex, Infinity));
      previous[vtex] = null; 
    };

    // CORE 
    while (nodes.values.length) {
      priority = nodes.dequeue().value;

      if (priority === end ) {
        while (previous[priority]) {
          path.push(priority);
          priority = previous[priority]; 
        };
        break; 
      };

      if (distances[priority] !== Infinity) {
        for ( let i in this.adjacencyList[priority] ) {
          let elOfPriority = this.adjacencyList[priority][i]; //{node:B, weight: 4 } | {node: C, weight: 2}...
          let elVtex = elOfPriority.node; // B | C...

          let candidate = distances[priority] + elOfPriority.weight; // 4 | 2..
          
          if (candidate < distances[elVtex]) {
            distances[elVtex] = candidate;
            previous[elVtex] = priority; 
            nodes.enqueue(elVtex, candidate); 
          };
        };
      }; 
    };
     return path.concat(priority).reverse(); 
  };
}

const graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A","B",4)
graph.addEdge("A","C",2)
graph.addEdge("B","E",3)
graph.addEdge("C","D",2)
graph.addEdge("C","F",4)
graph.addEdge("D","E",3)
graph.addEdge("D","F",1)
graph.addEdge("E","F",1)
graph.Dijkstra("A","E") // [ 'A', 'C', 'D', 'F', 'E' ]