class Node {
  constructor (val) {
    this.val = val; 
    this.next =  null;
  }
}

class Queue {
  constructor () {
    this.first = null;
    this.last = null; 
    this.size = 0; 
  }

  enqueue (val) {
    let newNode = new Node(val); 
    if (this.size === 0 )  {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size; 
  }

  dequeue () {
    if (!this.first) return null; 
    let removed = this.first;
    if (this.first === this.last) {
      this.first = null; 
      this.last = null;
    } 
    else this.first = removed.next;
    --this.size; 
    return removed.val; 
  }

  printQueue () {
    let result = []; 
    (function helper (source) {
      if (!source) return null;
      result.push(source.val); 
      helper(source.next); 
    })(this.first);
    return result; 
  }
}


/*
Vertex - a node
Edge - connection between nodes
Weighted/Unweighted - values assigned to distances between vertices | valores atribuídos a distâncias entre vértices
Directed/Undirected - directions assigned to distanced between vertices | direções atribuídas a distanciadas entre vértices


*/


// Esse grafo possui edges bidirecionais

class GraphAdjacencyList {
  constructor () {
    this.adjacencyList = {};
    //this.AdjacencyMatrix = [];
  }

  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] =  [];
  }

  addEdge (vertex1, vertex2 ) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this; 
  }

  removeEdge (vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter( v => v !== vertex1 );
    //return this.adjacencyList[vertex1] && this.adjacencyList[vertex2]; 
  }

  removeVertex (vertex) {
    if (!this.adjacencyList[vertex].lenght) {
      delete this.adjacencyList[vertex];
      return;
    }
    this.removeEdge(vertex, this.adjacencyList[vertex][0]);
    this.removeVertex(vertex)
  }

  // create a function that accept a vertex;
  // create the restore to result and to the value visited;
  // instance the adjacencyList in a variable;
  //create a helper function that accept a vertex; 

  // start in index 0; 
  depthFirstSearchRecursive (start) {
    let result = [];
    let isVisited = {};
    let adjacencyList = this.adjacencyList; // instanciar adjacencyList aqui para ser chamada correntamente no escopo da DFS function helper; 

    (function DFS (vertex) {
      if (!vertex) return null; 
      isVisited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if(!isVisited[neighbor]) return DFS(neighbor)
      });
    })(start);

    return result; 
  }

  //start in index -1; 
  depthFirstSearchIterative (vertex) {
    let stack = [vertex];
    let result = [];
    let isVisited = {}; 
    let currentVertex;

    isVisited[vertex] = true;
    while (stack.length) {
        console.log(stack)
        currentVertex =  stack.pop();
        result.push(currentVertex);
        
        this.adjacencyList[currentVertex].forEach( neighbor => {
            if(!isVisited[neighbor]){
                isVisited[neighbor] = true;
                stack.push(neighbor)
            }
        });
    };
    return result;    
  }

  depthFirstSearchIterative2 (vertex) {
    let stack = [vertex];
    let result = [];
    let isVisited = {}; 
    let currentVertex;

    isVisited[vertex] = true;

    while (stack.length) {
      console.log(stack)
      currentVertex =  stack.pop();
      result.push(currentVertex);

      for (let i = this.adjacencyList[currentVertex].length-1; i >= 0; i--) {
        let neighbor = this.adjacencyList[currentVertex][i]
        if(!isVisited[neighbor]){
          isVisited[neighbor] = true;
          stack.push(neighbor)
        }
      }
    };
    return result;    
  }

  breadthFirstSearch (source) {
    if(!source) return null; 
    let queue = new Queue(); 
    let result = [];
    let isVisited =  {};
    let currentVertex; 

    isVisited[source] = true; 
    queue.enqueue(source); 

    while (queue.size > 0 ) {
      currentVertex =  queue.dequeue();
      result.push(currentVertex);

    //this.adjacencyList[currentVertex].slice().reverse().map( START IN THE RIGHT..
      this.adjacencyList[currentVertex].map(neighbor => { // START IN THE LEFT
        if (!isVisited[neighbor]) {
          isVisited[neighbor] = true; 
          queue.enqueue(neighbor); 
        };
      });
    };
    return result; 
  }

 }


const g = new GraphAdjacencyList();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//      A
//   /     \
//  B       C
//   \     /
//    D---E
//     \ /
//      F

g.depthFirstSearchRecursive("A") // start 0; RESULT: ['A', 'B', 'D', 'E', 'C', 'F']
g.depthFirstSearchIterative("A") // start -1 RESULT: ['A', 'C', 'E', 'F', 'D', 'B']
g.depthFirstSearchIterative2("A") // start 0 RESULT: ['A', 'B', 'D', 'E', 'F', 'C']
g.breadthFirstSearch("A"); // ['A', 'B', 'C', 'D', 'E', 'F']