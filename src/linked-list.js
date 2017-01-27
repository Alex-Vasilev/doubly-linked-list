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
//        const node = new Node(data);
//                console.log(list._tail instanceof Node);
//                console.log(list._head instanceof Node);
//                if (this._head === null) {
//                 node.prev = node;
//    node.next = node;
//        this._head = node;
//                this._tail = node;
//        } else {
//           node.prev = this._tail;
//    node.next = this._head;
//    this._head.prev = node;
//    this._tail.next = node;
//    this._tail = node;
        }

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
//        this.length++;
//        }

head() {
return this._head.next.data;
}

tail() {
return this._tail.prev.data;
}

_at(index) {
var currentNode = this._head.next,
        count = 0,
        length = this.length;
        if (isNaN(index) || index > length){
throw new Error(message.failure);
}

while (count != index && count <= length) {
currentNode = currentNode.next;
        count++;
        }

return currentNode;
//    console.log(currentNode.data)
        }

at(index){
return this._at(index).data;
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
//        this.length = 0;
//        this._head = null;
//        this._tail = null;
}

deleteAt(index) {
//                    var currentNode = this._head,
//        length = this.length,
//        count = 0,
//        message = {failure: 'Failure: non-existent node in this list.'},
//        beforeNodeToDelete = null,
//        nodeToDelete = null,
//        deletedNode = null,
//        afterNodeToDelete = null;
//
//    
//    if (length === 0 || index < 0 || index > length) {
//        throw new Error(message.failure);
//    }
//
//    
//    if (index === 0) {
//        this._head = currentNode.next;
//
//        
//        if (!this._head) {
//            this._head.prev = null;
//       
//        } else {
//            this._tail = null;
//        }
//
//    
//    } else if (index === this.length) {
//        this._tail = this._tail.prev;
//        this._tail.next = null;
//    
//    } else {
//        while (count < index) {
//            currentNode = currentNode.next;
//            count++;
//        }
//
//        beforeNodeToDelete = currentNode.prev;
//        nodeToDelete = currentNode;
//        afterNodeToDelete = currentNode.next;
//
//        beforeNodeToDelete.next = afterNodeToDelete;
//        afterNodeToDelete.prev = beforeNodeToDelete;
//        deletedNode = nodeToDelete;
//        nodeToDelete = null;
//    }
//
//    this.length--;
}

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
        list.deleteAt(0)
        list.at(0)


        list.isEmpty()


        console.log(list)