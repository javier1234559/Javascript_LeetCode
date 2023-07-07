//resource : https://www.30secondsofcode.org/js/s/data-structures-doubly-linked-list/

class DoublyLinkedList {
  constructor() {
    this.nodes = [];
  }

  get size() {
    return this.nodes.length;
  }

  get head() {
    return this.size ? this.nodes[0] : null;
  }

  get tail() {
    return this.size ? this.nodes[this.size - 1] : null;
  }

  insertAt(index, value) {
    const previousNode = this.nodes[index - 1] || null;
    const nextNode = this.nodes[index] || null;
    const node = { value, next: nextNode, previous: previousNode };

    if (previousNode) previousNode.next = node;
    if (nextNode) nextNode.previous = node;
    this.nodes.splice(index, 0, node);
  }

  insertFirst(value) {
    this.insertAt(0, value);
  }

  insertLast(value) {
    this.insertAt(this.size, value);
  }

  getAt(index) {
    return this.nodes[index];
  }

  removeAt(index) {
    const previousNode = this.nodes[index - 1] || null;
    const nextNode = this.nodes[index + 1] || null;

    if (previousNode) previousNode.next = nextNode;
    if (nextNode) nextNode.previous = previousNode;

    return this.nodes.splice(index, 1);
  }

  clear() {
    this.nodes = [];
  }

  reverse() {
    this.nodes = this.nodes.reduce((acc, { value }) => {
      const nextNode = acc[0] || null;
      const node = { value, next: nextNode, previous: null };
      if (nextNode) nextNode.previous = node;
      return [node, ...acc];
    }, []);
  }

  *[Symbol.iterator]() {
    yield* this.nodes;
  }
}


const list = new DoublyLinkedList();

list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insertLast(4);
list.insertAt(3, 5);

list.size;                      // 5
list.head.value;                // 3
list.head.next.value;           // 2
list.tail.value;                // 4
list.tail.previous.value;       // 5
[...list.map(e => e.value)];    // [3, 2, 1, 5, 4]

list.removeAt(1);               // 2
list.getAt(1).value;            // 1
list.head.next.value;           // 1
[...list.map(e => e.value)];    // [3, 1, 5, 4]

list.reverse();
[...list.map(e => e.value)];    // [4, 5, 1, 3]

list.clear();
list.size;                      // 0