const Queue = require('./queue');

const mainQueue = new Queue();
mainQueue.enqueue('F Jane');
mainQueue.enqueue('M Frank');
mainQueue.enqueue('M John');
mainQueue.enqueue('M Sherlock');
mainQueue.enqueue('F Madonna');
mainQueue.enqueue('M David');
mainQueue.enqueue('M Christopher');
mainQueue.enqueue('F Beyonce');

//console.log(mainQueue);

function dancePairing(queue) {
  let femaleQueue = new Queue();
  let maleQueue = new Queue();
  let counter = 0;
  while(queue.first !== null) {
    if(queue.first.value[0] === 'F') {
      femaleQueue.enqueue(queue.first.value);
      queue.dequeue();
    } else {
      maleQueue.enqueue(queue.first.value);
      queue.dequeue();
    }
  }
  while(maleQueue.first !== null && femaleQueue.first !== null) {
    console.log(`${maleQueue.first.value} is paired with ${femaleQueue.first.value}`);
    maleQueue.dequeue();
    femaleQueue.dequeue();
  }
  if (maleQueue.first !== null) {
    while(maleQueue.first !== null) {
      counter++;
      maleQueue.dequeue();
    }
    console.log(`There are ${counter} male dancers waiting`);
  }
  
  if (femaleQueue.first !== null) {
    while(femaleQueue.first !== null) {
      counter++;
      femaleQueue.dequeue();
    }
    console.log(`There are ${counter} male dancers waiting`);
  }
}

dancePairing(mainQueue);