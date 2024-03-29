class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
       then create a new node,
       add data to the new node, and
       have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    /* In order to remove the top of the stack, you have to point
       the pointer to the next item and that next item becomes the
       top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack) {
  if (stack.top === null) {
    console.log('Stack is empty');
    return;
  }
  return stack.top.data;
}

function isEmpty(stack) {
  if (stack.top === null) {
    return true;
  }
  return false;
}

function display(stack) {
  if (stack.top === null) {
    console.log('Stack is empty');
    return;
  }
  let currNode = stack.top;
  while(currNode.next !== null) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
  return currNode.data;
}

const stack1 = new Stack();
const stack2 = new Stack();

function enqueue(item) {
  stack1.push(item);
}

function dequeue() {
  if(isEmpty(stack1))
    return 'Queue is empty';

  while (!isEmpty(stack1)) {
    let tempNode = stack1.pop();
    stack2.push(tempNode);
  }
  return stack2.pop();
}

enqueue(1);
enqueue(2);
enqueue(3);

console.log(stack1);

console.log(dequeue());