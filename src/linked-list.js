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
                this._tail.next = node;
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
        var currentNode = this._head,
                length = this.length,
                count = 0,
                message = {failure: 'Failure: non-existent node in this list.'};
                // 1-ый случай: неверная позиция 
        if (length === 0 || index < 0 || index > length) {
        throw new Error(message.failure);
        }

        // 2-ой случай: верная позиция 
        while (count < index) {
        currentNode = currentNode.next;
        count++;
        }

//    return currentNode
        console.log(currentNode);
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

        deleteAt(index) {
        var currentNode = this._head,
        length = this.length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null,
        afterNodeToDelete = null;

    // 1-ый случай: неверная позиция
    if (length === 0 || index < 0 || index > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: первый узел удален
    if (index === 0) {
        this._head = currentNode.next;

        // 2-ой случай: существует второй узел
        if (!this._head) {
            this._head.previous = null;
        // 2-ой случай: второго узла не существует
        } else {
            this._tail = null;
        }

    // 3-ий случай: последний узел удален
    } else if (index === this.length) {
        this._tail = this._tail.prev;
        this._tail.next = null;
    // 4-ый случай: средний узел удален
    } else {
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }

        beforeNodeToDelete = currentNode.prev;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;

        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.prevs = beforeNodeToDelete;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }

    this.length--;

//    return message.success;
        }

        reverse() {}

        indexOf(data) {}
        }

module.exports = LinkedList;
        const data = 42;
        const list = new LinkedList();
//            list.append(data);
//            list.append(123)
//            list.append(413)

//            list.head()

//                        list.append(567)
//        list.head()
//        list.tail()
//        list.at(0)
//                list.at(0)
//                list.at(1);
//                list.deleteAt(1);
//                list.at(1)




//        list.isEmpty()


//        console.log(list)