class Node {
    constructor(val) {
        this.next = null;
        this.val = val;
    }
}


class SingleLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tial = null;
    }
    /**
     * push add new Node to end of linked list.
     * complixty O(1)
     * @param {*} val Node Date
     * @returns SLL after add new node.
     */
    push(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tial = newNode;
        } else {
            this.tial.next = newNode;
            this.tial = newNode;
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
        if (!this.length) return false;
        if (this.length == 1) {
            this.head = null;
            this.tial = null;
        } else {
            let prev, node = this.head;
            while (node.next != null) {
                prev = node;
                node = node.next;
            }
            prev.next = null;
            this.tial = prev;
        }
        this.length--;
        return node;
    }

    /**
     * shift remove first node of linked list.
     * complixty : O(1)
     * @returns first node after remove it.
     */
    shift() {
        if (!this.length) return false;
        let removdNode = null;
        if (this.length == 1) {
            this.head = null;
            this.tial = null;
        } else {
            removdNode = this.head;
            this.head = this.head.next;
        }
        this.length--;
        return removdNode;
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
            this.tial = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }

    /**
     * getByIndex return node of specific element.
     * complixty : O(n)
     * @param {*} index index of element you want.
     * @returns node of incomming index.    
     */
    getByIndex(index) {
        if (index >= this.length || index < 0) return null;
        let current = this.head, counter = 0;
        while (current.next != null && counter < index) {
            current = current.next;
            counter++;
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
        let newNode = new Node(val);
        if (index < 0 || index > this.length) return false;
        if (this.length == 0) return this.unshift(val);
        else if (index == this.length) return this.push(val);
        let prev = this.getByIndex(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return this;
    }

    /**
     * remove element in specific position.
     * complixty : O(n)
     * @param {*} index index for element you want to remove
     * @returns node after deleted
     */
    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index == this.length - 1) return this.pop();
        if (index == 0) return this.shift();

        let prev = this.getByIndex(index - 1);
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    /**
     * reverse - reverse linked list
     * complixty : O(n)
     * @returns linked list after reversed
     */
    reverse() {
        let node = this.head, next = null, prev = null;
        this.head = this.tial;
        this.tial = node;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

}