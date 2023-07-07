// https://www.collectionsjs.com/heap : library of collection in js
//resource:  https://weekendtutorial.com/how-to-implement-binary-heap-in-javascript-in-2022/


const root = 0;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;
const parent = i => ((i + 1) >> 1) - 1;

class BinaryMaxHeap {
  
  constructor() {
    this._heap = [];
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }
  
  insert(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this.heapifyUp();
    })
  }

  build_heap(values) {
    values.forEach(value => {
      this._heap.push(value);
    });

    let n = values.length;
    let lastNonLeafNode = (n >> 1) - 1;

    for (let i = lastNonLeafNode; i >= 0; i--) {
      this.heapify(i);
    }
  }

  heapify(i) {
    let node = i;
    let l = left(node);
    let r = right(node);
    let n = this.size();
    
    if (l < n && this._heap[node] < this._heap[l]) {
      node = l;
    }

    if (r < n && this._heap[node] < this._heap[r]) {
      node = r;
    }

    if (node !== i) {
      this.swap(node, i);
      this.heapify(node);
    }
  }

  extract_max() {
    let poppedVal = this.peek();
    let last = this.size() - 1;
    let top = 0;

    // swap top with last
    if(last > top)
      this.swap(top, last);

    // remove last node
    this._heap.pop();

    this.heapifyDown();

    return poppedVal;
  }

  swap(i, j) {
    let temp = this._heap[i];
    this._heap[i] = this._heap[j];
    this._heap[j] = temp;
  }

  heapifyUp() {
    let node = this.size() - 1;

    while (node > 0 && this._heap[node] > this._heap[parent(node)]) {
      this.swap(node, parent(node));
      node = parent(node);
    }
  }

  heapifyDown() {
    let node = root; 
    let n = this.size();
    let max;

    while (left(node) < n && this._heap[node] < this._heap[left(node)] ||
          right(node) < n && this._heap[node] < this._heap[right(node)]) {
      
      max = this._heap[left(node)];

      max = this._heap[right(node)] !== undefined ? Math.max(max, this._heap[right(node)]) : max;

      if (this._heap[node] > max) {
        break;
      }

      if (max === this._heap[left(node)]) {
        this.swap(node, left(node));
        node = left(node);
      } else {
        this.swap(node, right(node));
        node = right(node);
      }
    }
  }
}

let pr = new BinaryMaxHeap();

pr.build_heap(arr);

console.log('Heap using approach 2', pr);