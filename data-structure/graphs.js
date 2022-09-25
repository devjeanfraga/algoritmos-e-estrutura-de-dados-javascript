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

 }