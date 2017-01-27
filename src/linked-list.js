const Node = require('./node');
        class LinkedList {
        constructor() {
        this.length = 0;
        this._head = new Node("HEAD", null, null);
        this._tail = new Node("TAIL", null, null);
        this._head.next = this._tail;
        this._tail.prev = this._head;
        }

        append(data) {
        return  this.insertAt(this.length, data);
        }

        head() {
//        return this._head.next.data;
        }

        tail() {
//        return this._tail.prev.data;
        }

//        _at(index) {
//        var currentNode = this._head.next,
//        count = 0,
//        length = this.length;
//        if (isNaN(index) || index > length){
//        throw new Error(message.failure);
//         }
//
//        while (count != index && count <= length) {
//            currentNode = currentNode.next;
//            count++;
//        }
//        return currentNode;
//        }

        at(index){
//        return this._at(index).data;
        }

        insertAt(index, data) {
        var pos = this._at(index),
            node = new Node(data, pos.prev, pos);
        pos.prev = node;
        node.prev.next = node;
        this.length++;
        return this;
        }

        isEmpty() {
//        return this.length == 0 ? true : false;
        }

        clear() {
////           var index = this.length; 
//          while(this.length>0){
//              this.deleteAt(this.length)
//              this.length--;
//          }
        }

        deleteAt(index) {
//        var pos = this._at(index);
//        pos.next.prev = pos.prev;
//        pos.prev.next = pos.next;
//        this.length--;
//        pos.prev = null;
//        pos.next = null;
//        pos.data = null;
//        return this;
        }

        reverse() {
//        var currentHead = this._head.next,
//            currentTail = this._tail.prev,
//            index = 0,
//            temp;
//        while (index != Math.floor(this.index / 2)){
//            temp = currentHead.data;
//            currentHead.data = currentTail.data;
//            currentTail.data = temp;
//            currentHead = currentHead.next;
//            currentTail = currentTail.prev;
//        }
//
//        return this;
        }

        indexOf(data) {
//        var index = 0,
//            current = this._head.next;
//        while (current != null && current.data != data){
//            current = current.next;
//            index++;
//        }
//        return current === null ? - 1 : index;
//           }
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
        list.deleteAt(0)
        list.at(0)


        list.isEmpty()

 list.clear()
        console.log(list)