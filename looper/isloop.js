"use strict";

//Complete this algo
const isLoop = linkedlist => {
  const node = linkedlist.head;
  if (!node) return false;

  const container = [];

  // check to see if container has node's value?
  let nextNode = node.next;
  while (nextNode) {
    const val = nextNode.value
    if (container.includes(val)) {
      return true;
    } else {
      container.push(val);
    }
    nextNode = nextNode.next
  }

  // nextNode doesn't exist and we didnt find a loop
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
