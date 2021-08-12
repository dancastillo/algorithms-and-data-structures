const Graph = function() {
  this.adjacencyList = {};
  this.numOfVertices = 0;
};

Graph.prototype = {
  addVertex: function(vertex) {
    this.numOfVertices++;
    this.adjacencyList[vertex] = [];
  },

  addEdge: function(source, destination) {
    this.adjacencyList[source].push(destination);
    this.adjacencyList[destination].push(source);
  },

  print: function() {
    let keys = Object.keys(this.adjacencyList);

    for (let key of keys) {
      let values = this.adjacencyList[key];

      let conc = '';

      for (let value of values) {
        conc += `${value} `;
      }

      console.log(`${key} => ${conc}`);
    }
  }
};

module.exports = Graph;
