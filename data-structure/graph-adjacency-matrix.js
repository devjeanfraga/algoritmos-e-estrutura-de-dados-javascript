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
    let idx1 = this.vtexIndex[vtex1], idx2 = this.vtexIndex[vtex2];
    this.adjacencyMatrix[idx1][idx2] = 1;
    this.adjacencyMatrix[idx2][idx1] = 1;
    return { matrix:this.adjacencyMatrix, index: this.vtexIndex}
  }

  isConnected (vtex1, vtex2) {
    if(this.adjacencyMatrix.length)
      return !!this.adjacencyMatrix[this.vtexIndex[vtex1]][this.vtexIndex[vtex2]];
    else return null;
  }
}

const graph =  new GraphAdjacencyMatrix();
console.log(graph.addVertex("A"));
console.log(graph.addVertex("B"));
console.log(graph.addEdge("A","B"));
console.log(graph.isConnected("A","B"));




