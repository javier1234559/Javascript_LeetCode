class Stack {

  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
  peek() { //get the top item without removing it
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  size() {
    return this.stack.length;
  }
  clear() {
    return this.stack = [];
  }
  print() {
    console.log(this.stack.toString());
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop(); // remove 2
console.log(stack.peek()); //1