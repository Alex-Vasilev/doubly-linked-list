const Node = require('./node');
        class LinkedList {
        constructor() {
        this.length = 0;
                this._head = null;
                this._tail = null;
        }

        append(data) {
        const node = new Node(data);
                console.log(list._tail instanceof Node);
                console.log(list._head instanceof Node);
                if (this.length == 0) {
//                 node.prev = node;
//    node.next = this._tail;
        this._head = node;
                this._tail = node;
//        node.next = this._tail;
//        this._head = node;
//        this._tail = node;

        } else {
        node.prev = this._tail;
                this.tail.next = node;
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
//     node.prev = node;
//    node.next = node;
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

        head() {
        return this.length == 0 ? null : this._head.data;
        }

        tail() {
//        return 
        console.log(this.length == 0 ? null : this._tail.data);
        }

        at(index) {
//            this.length = index+1;
            
//            this.tail();
//        console.log(this.length)
//            return 
        }

        insertAt(index, data) {}

        isEmpty() {
        return this.length == 0 ? true : false;
        }

        clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        }

        deleteAt(index) {}

        reverse() {}

        indexOf(data) {}
        }

module.exports = LinkedList;
        const data = 42;
        const list = new LinkedList();
            list.append(data);
            list.append(123)
            list.append(413)

//            list.head()

//                        list.append(567)
//        list.head()
//        list.tail()
        list.at(0)


        list.isEmpty()


        console.log(list)