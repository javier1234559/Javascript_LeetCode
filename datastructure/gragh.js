//resource : https://www.30secondsofcode.org/js/s/data-structures-graph/

class Graph {
  constructor(directed = true) {
    this.directed = directed;
    this.nodes = [];
    this.edges = new Map();
  }

  addNode(key, value = key) {
    this.nodes.push({ key, value });
  }

  addEdge(a, b, weight) {
    this.edges.set(JSON.stringify([a, b]), { a, b, weight });
    if (!this.directed)
      this.edges.set(JSON.stringify([b, a]), { a: b, b: a, weight });
  }

  removeNode(key) {
    this.nodes = this.nodes.filter(n => n.key !== key);
    [...this.edges.values()].forEach(({ a, b }) => {
      if (a === key || b === key) this.edges.delete(JSON.stringify([a, b]));
    });
  }

  removeEdge(a, b) {
    this.edges.delete(JSON.stringify([a, b]));
    if (!this.directed) this.edges.delete(JSON.stringify([b, a]));
  }

  findNode(key) {
    return this.nodes.find(x => x.key === key);
  }

  hasEdge(a, b) {
    return this.edges.has(JSON.stringify([a, b]));
  }

  setEdgeWeight(a, b, weight) {
    this.edges.set(JSON.stringify([a, b]), { a, b, weight });
    if (!this.directed)
      this.edges.set(JSON.stringify([b, a]), { a: b, b: a, weight });
  }

  getEdgeWeight(a, b) {
    return this.edges.get(JSON.stringify([a, b])).weight;
  }

  adjacent(key) {
    return [...this.edges.values()].reduce((acc, { a, b }) => {
      if (a === key) acc.push(b);
      return acc;
    }, []);
  }

  indegree(key) {
    return [...this.edges.values()].reduce((acc, { a, b }) => {
      if (b === key) acc++;
      return acc;
    }, 0);
  }

  outdegree(key) {
    return [...this.edges.values()].reduce((acc, { a, b }) => {
      if (a === key) acc++;
      return acc;
    }, 0);
  }
}

const g = new Graph();

g.addNode('a');
g.addNode('b');
g.addNode('c');
g.addNode('d');

g.addEdge('a', 'c');
g.addEdge('b', 'c');
g.addEdge('c', 'b');
g.addEdge('d', 'a');

g.nodes.map(x => x.value);  // ['a', 'b', 'c', 'd']
[...g.edges.values()].map(({ a, b }) => `${a} => ${b}`);
// ['a => c', 'b => c', 'c => b', 'd => a']

g.adjacent('c');            // ['b']

g.indegree('c');            // 2
g.outdegree('c');           // 1

g.hasEdge('d', 'a');        // true
g.hasEdge('a', 'd');        // false

g.removeEdge('c', 'b');

[...g.edges.values()].map(({ a, b }) => `${a} => ${b}`);
// ['a => c', 'b => c', 'd => a']

g.removeNode('c');

g.nodes.map(x => x.value);  // ['a', 'b', 'd']
[...g.edges.values()].map(({ a, b }) => `${a} => ${b}`);
// ['d => a']

g.setEdgeWeight('d', 'a', 5);
g.getEdgeWeight('d', 'a');  // 5