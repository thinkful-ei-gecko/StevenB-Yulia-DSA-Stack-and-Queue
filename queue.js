class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

module.exports = Queue;

// function peek(queue) {
//   if (queue.first === null) {
//     return 'Queue is empty';
//   }
//   return queue.first.value;
// }

// function isEmpty(queue) {
//   if (queue.first === null) {
//     return true;
//   }
//   return false;
// }

// function display(queue) {
//   if (queue.first === null) {
//     return 'Queue is empty';
//   }
//   let currNode = queue.first;
//   while(currNode.next !== null) {
//     console.log(currNode.value);
//     currNode = currNode.next;
//   }
//   return currNode.value;
// }

// function main() {
//   const starTrekQ = new Queue();
//   starTrekQ.enqueue('Kirk');
//   starTrekQ.enqueue('Spock');
//   starTrekQ.enqueue('Uhura');
//   starTrekQ.enqueue('Sulu');
//   starTrekQ.enqueue('Checkov');
//   starTrekQ.dequeue();
//   starTrekQ.dequeue();
//   return starTrekQ;
// }

// console.log(display(main()));
// // console.log(peek(main()));