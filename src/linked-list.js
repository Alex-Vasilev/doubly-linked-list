const Node = require('./node');
        class LinkedList {
        constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        }

        append(data) {
        const node = new Node(data);
       
        if (this.length === null) {
        this._head = node;
        this._tail = node;
        
        } else {
        this.tail.next = node;
        node.prev = this._tail;
        this._tail = node;
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
//   if (this._head === null) {
////     node.prev = node;
////    node.next = node;
//    this._head = node;
//    this._tail = node;
//  } else {
//    node.prev = this._tail;
//    node.next = this._head;
//    this.head.prev = node;
//    this.tail.next = node;
//    this._tail = node;
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
            const data = 42;

            const list = new LinkedList();

            list.append(data);