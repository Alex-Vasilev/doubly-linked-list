const Node = require('./node');
        class LinkedList {
        constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
        }

        append(data) {
        let node = {
        data: data
        };
         if (this.length == 0) {
        this.head = node;
        this.tail = node;
        } else {
        this.tail.next = node;
        node.prev = this.tail;
         this.tail = node;
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
