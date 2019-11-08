const Queue = require('./queue');

const bankQueue = new Queue();

bankQueue.enqueue(1);
bankQueue.enqueue(2);
bankQueue.enqueue(3);
bankQueue.enqueue(4);
bankQueue.enqueue(5);
bankQueue.enqueue(6);
bankQueue.enqueue(7);
bankQueue.enqueue(8);

let timeOut = false;

function timedOut() {
  timeout = true;
}

// setInterval(timedOut(), 3000);

function ophidianBank(queue) {

  while(queue.first !== null) {
    let paperwork = Math.random();
    if (paperwork > 0.25) {
      console.log('after dequeue ' + queue.first.value);
      queue.dequeue();
    }
    else {
      const noPaperwork = queue.first.value;
      console.log('dequeue no paperwork ' + queue.first.value);
      queue.dequeue();
      queue.enqueue(noPaperwork);
    }
  }
  return queue;
}

ophidianBank(bankQueue);
// setTimeout(ophidianBank(bankQueue), 3000);
