const Graph = require('./index');


const graph = new Graph();
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let vertice of vertices) {
  graph.addVertex(vertice);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');

graph.print();

// Below should print out
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
