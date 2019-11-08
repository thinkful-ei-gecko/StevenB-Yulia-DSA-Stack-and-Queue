class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item) {
    let node = new _Node(item, null, this.last);
    if (this.last !== null) {
      this.last.next = node;
    }
    this.last = node;
    if (this.first === null) {
      this.first = node;
    }
  }
}

function peek(queue) {
  return queue.first.value;
}

function main() {
  const starTrekQ = new Queue();
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  // starTrekQ.dequeue();
  // starTrekQ.dequeue();
  return starTrekQ;
}

console.log(main());
console.log(peek(main()));