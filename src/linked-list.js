const Node = require('./node');
        class LinkedList {
        constructor() {
        this.length = 0;
        this._head;
        this._tail;
        }

        append(data) {
//        const node = new Node(data);
        if (this.length == 0) {
        this._head = Node;
        this._tail = Node;
        
        } else {
        this._tail.next = Node;
        node.prev = this._tail;
        this._tail = Node;
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
this.data = data;
  this.length++;
//  return Node;
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
            const data = 42;

            const list = new LinkedList();

            list.append(data);