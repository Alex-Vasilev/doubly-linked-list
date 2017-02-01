const Node = require('./node');
class LinkedList {
    constructor() {
        this.length = 0;
        this._head  = null;
        this._tail = null;
    }

    append(data) {
        if(this.length == 0){
            this._head  = new Node('head', null, null);
            this._tail  = new Node('tail', null, null);
            this._head.next = this._tail;
            this._tail.prev = this._head;
        }
        this.insertAt(this.length, data);         
        this.length++;
        return this;
    }

    head() {
        return this._head.next.data;

    }

    tail() {
        return this._tail.prev.data;
    }

    _at(index){
        var currentNode = this._head.next,
        count = 0,
        length = this.length;       
        if(isNaN(index)|| length<index){
            throw Error('lox');
        }
        while(count!=index && count <= length){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    at(index){
        return this._at(index).data
    }

    insertAt(index, data) {
        var currentNode = this._at(index),
        node = new Node(data, currentNode.prev, currentNode);
        if(this.length==0){
            this._head.next = node;
            this._tail.prev = node;
        }
        else{
            currentNode.prev = node;
            node.prev.next = node;              
        }
        return this;
    }

    isEmpty() {
        return this.length == 0 ? true : false;
    }

    clear() {
        this._head  = new Node(null);
        this._tail  = new Node(null);
        this._head.next = this._tail;
        this._tail.prev = this._head;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var currentNode = this._at(index);

        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        currentNode = null;
        this.length--;
        return this;
    }

    reverse() {
                // var currentNode = this._head,
        // count = 0,
        // index = this.length

        // if(count <= index){
        //     while(count < index){
        //         // currentNode = currentNode.next;
        //         console.log(currentNode) 
        //         currentNode = currentNode.next;
        //         count++;
        //     }
        // } else throw Error('lox')
    }

    indexOf(data) {
        var currentNode = this._head.next,
        count = 0;
        while(count < this.length){
            if(currentNode.data === data) return count;                 
            currentNode = currentNode.next;
            count++;            
        }
        return -1;   
    }
}

module.exports = LinkedList;
const data = 42;
const list = new LinkedList();
list.append(data);
list.append(123)

list._at(1)
console.log(list)