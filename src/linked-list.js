const Node = require('./node');
        class LinkedList {
        constructor() {
        this.length = 0;
        this.head;
        this.tail;
        }

        append(data) {
        const node = new Node(data);
        if (this.length == 0) {
        this.head = node;
        this.tail = node;
        } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        }
            
//        if (this.length == 0) {
//        this.head = Node;
//        }
//        else {
//        this.head.next = Node;
//        Node.prev = this.head;
//        this.head = Node;
//        }
//        this.length++;
//   if (this.head === null) {
//     Node.prev = Node;
//    Node.next = Node;
//    this.head = Node;
//    this.tail = Node;
//  } else {
//    Node.prev = this.tail;
//    Node.next = this.head;
//    this.head.prev = Node;
//    this.tail.next = Node;
//    this.tail = Node;
//  }
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
