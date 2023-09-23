class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    /**
     * push add new Node to end of linked list.
     * complixty O(1)
     * @param {*} val Node Date
     * @returns SLL after add new node.
     */
    push(val) {
        let newNode = new Node(val);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * unshift add node on the front of linked list.
     * complixty : O(1)
     * @param {*} val node value.
     * @returns node after added.
     */
    unshift(val) {
        let newNode = new Node(val);

        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * pop remove last node from linked list
     * complixty : O(n)
     * @returns last node after remove it.
     */
    pop() {
        if (this.length == 0) return false;
        let removedNode = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            removedNode.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }

    /**
     * shift remove first node of linked list.
     * complixty : O(1)
     * @returns first node after remove it.
     */
    shift() {
        if (this.length == 0) return false;
        let removedNode = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }

    /**
     * getByIndex return node of specific element.
     * complixty : O(n)
     * @param {*} index index of element you want.
     * @returns node of incomming index.    
     */
    getByIndex(index) {
        if (this.length == 0 || index >= this.length) return false;
        let mid = Math.floor(this.length / 2);
        let current, counter = 0;
        if (index >= mid) {
            current = this.tail;
            counter = this.length - 1;
            while (counter !== index) {
                current = current.prev;
                counter--;
            }
        } else {
            current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
        }
        return current;
    }

    /**
     * setNodeValue for edit node value.
     * complixty : O(n)
     * @param {*} index index for target element.
     * @param {*} val value
     * @returns node after uplate.
     */
    setNodeValue(index, val) {
        let node = this.getByIndex(index);
        if (!node) return false;
        node.val = val;
        return node;
    }

    /**
     * insert -> insert element in specific position
     * complixty : O(n)
     * @param {*} index index for target position 
     * @param {*} val value of inserted node.
     * @returns single linked list.
     */
    insert(index, val) {
        if (index == 0 || index == this.length - 1) return this.push(val);

        let newNode = new Node(val);
        let node = this.getByIndex(index);
        let previous = node.prev;
        newNode.prev = previous;
        previous.next = newNode;
        newNode.next = node;
        node.prev = newNode;
        this.length++;
        return this;
    }

     /**
     * remove element in specific position.
     * complixty : O(n)
     * @param {*} index index for element you want to remove
     * @returns node after deleted
     */
     remove(index){
        if(index < 0 || index >= this.length)return false;
        if(index == 0)return this.shift();
        if(index == this.length-1)return this.pop();
        let removedNode = this.getByIndex(index);
        let previous = removedNode.prev;
        let next = removedNode.next;
        previous.next = next;
        next.prev = previous;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
     }

    printAll() {
        let node = this.head;
        while(node != null){
            console.log(node.val);
            node = node.next;
        }
    }
}


let dl = new DoublyLinkedList();
dl.push(5);
dl.push(10);
dl.push(15);
dl.unshift(2);
dl.unshift(1);
// console.log(dl.pop());
// console.log(dl.shift());
dl.remove(1);
console.log("------------------------------------");
dl.printAll();
