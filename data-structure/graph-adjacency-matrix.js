class GraphAdjacencyMatrix {
  constructor () {
    this.vtexIndex = {}
    this.adjacencyMatrix = []
  }

  addVertex (vtex) {
    let vertex = Object.keys(this.vtexIndex);
    if (vertex.indexOf(vtex) === -1 ) {
      this.adjacencyMatrix.push([])
      this.vtexIndex[vtex] = this.adjacencyMatrix.length-1
    }
      return { matrix:this.adjacencyMatrix, index: this.vtexIndex};
  }

  addEdge (vtex1, vtex2) {
    
  }
}

const graph =  new GraphAdjacencyMatrix();
console.log(graph.addVertex("A"));
console.log(graph.addVertex("B"));




