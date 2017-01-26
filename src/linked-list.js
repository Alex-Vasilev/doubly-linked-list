const Node = require('./node');
        class LinkedList {
        constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
        }

        append(data) {
   if (this.head === null) {
     node.prev = data;
    node.next = data;
    this.head = data;
    this.tail = data;
  } else {
    node.prev = this.tail;
    node.next = this.head;
    this.head.prev = data;
    this.tail.next = data;
    this.tail = data;
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
