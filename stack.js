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
  return stack.top;
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

// is_palindrome is O(n)
function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let cumulator = new Stack();

  for ( let i = 0; i < s.length; i++)
    cumulator.push(s[i]);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === cumulator.pop())
      return true;
    return false;
  }
}

function parenthCheck(s) {
  let cumulator = new Stack();
  let parenthCheck = null;

  for (let i = 0; i < s.length; i++)
    cumulator.push(s[i]); // b( ( ) )t

  for (let i = 0; i < s.length; i++) {
    if ((s[i] === '(' && cumulator.pop() === ')') || (s[i] === ')' && cumulator.pop() === '('))
      parenthCheck = true;
    else 
      return `Parentheses missing at position ${i + 1} ${s[i]}`; 
  }
  return parenthCheck;
};

console.log(parenthCheck('(())'));
console.log(parenthCheck('(((()))))'));
console.log(parenthCheck('(()'));
console.log(parenthCheck('(()'));

/* console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida")); */

function main() {
  const starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  // peek(starTrek);
  // isEmpty(starTrek);
  starTrek.pop();
  starTrek.pop();

  return display(starTrek);
}
// console.log(JSON.stringify(main()));
// console.log(main());

