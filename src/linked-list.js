const Node = require('./node');
        class LinkedList {
        constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
        }

        append(data) {
   if (this.head === null) {
     node.prev = Node;
    node.next = Node;
    this.head = Node;
    this.tail = Node;
  } else {
    node.prev = this.tail;
    node.next = this.head;
    this.head.prev = Node;
    this.tail.next = Node;
    this.tail = Node;
  }
  this.length++;
        }

        head() {}

        tail() {}

        at(index) {}

        insertAt(index, data) {}

        isEmpty() {}

        clear() {}

        deleteAt(index) {}

        reverse() {}

        indexOf(data) {}
        }

module.exports = LinkedList;
