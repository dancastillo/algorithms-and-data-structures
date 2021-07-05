const Node = require('./node');

const LinkedList = function() {
  this.head = null;
  this.size = 0;
};

LinkedList.prototype = {

  print: function() {
    let listNode = this.head;
    let index = 1;
    let listString = '';
    while(listNode) {
      listString += `|${index} - ${listNode.value}${listNode.next ? '| ---> ' : '| '}`;
      listNode = listNode.next;
      index++;
    }

    console.log(listString);
  },

  add: function(addNode) {
    let listNode = this.head;
    if (!listNode) {
      this.head = addNode;
    } else {
      while (listNode.next) {
        listNode = listNode.next;
      }

      listNode.next = addNode;
    }
    this.size++;
  },

  addFirst: function(firstNode) {
    if (!this.head) {
      this.head = firstNode;
    } else {
      firstNode.next = this.head;
      this.head = firstNode;
    }
    this.size++;
  },

  addAtPosition: function(position, addNode) {
    let prevPosition = this.head;

    if (position < 1 || position > this.size + 1) {
      console.log(`\nPlease enter a valid position between 1 and ${this.size+1}.`);
      return;
    }

    if (position === 1) {
      this.addFirst(addNode);
    } else {
      while (position--) {
        if (position === 0) {
          addNode.next = prevPosition;
          prevPosition = addNode;
        }
      }
    }
    this.size++;
  },

  remove: function(removeNode) {
    const notInListMessage = '\nNode is not in the list.';
    if (this.size === 1 && this.head.value !== removeNode.value) {
      console.log(notInListMessage);
    }

    if (this.head.value === removeNode.value) {
      this.head = this.head.next;
    } else {
      let slow = this.head;
      let fast = slow.next;

      while (fast && fast.value !== removeNode.value) {
        slow = slow.next;
        fast = fast.next;
      }

      if (!fast) {
        console.log(notInListMessage);
      } else {
        slow.next = fast.next;
      }
    }
  },

  removeFist: function() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  },

  removeLast: function() {
    if (!this.head) {
      return;
    }

    let prev = this.head;
    let node = prev.next;

    while (node.next) {
      prev = prev.next;
      node = node.next;
    }

    prev.next = null;
  }
};
