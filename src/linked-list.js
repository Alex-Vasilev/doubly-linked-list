const Node = require('./node');
        class LinkedList {
        constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
        }

        append(data) {
   if (this.head === null) {
     node.prev = module.exports;
    node.next = module.exports;
    this.head = module.exports;
    this.tail = module.exports;
  } else {
    node.prev = this.tail;
    node.next = this.head;
    this.head.prev = module.exports;
    this.tail.next = module.exports;
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
