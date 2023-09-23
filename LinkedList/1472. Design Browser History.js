class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
/**
 * @param {string} homepage
 */
class BrowserHistory {
    constructor(homepage) {
        let newNode = new Node(homepage);
        this.head = newNode;
        this.tail = newNode;
        this.current = newNode;
    }

    /** 
    * @param {string} url
    * @return {void}
    */
    visit(url) {
        let newNode = new Node(url);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.current) {
                this.tail = this.current;
                this.current.next = null;
            }
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.current = newNode;
        this.length++;
    };

    /** 
    * @param {number} steps
    * @return {string}
    */
    back(steps) {
        let counter = 0;
        while (this.current.prev != null && counter < steps) {
            this.current = this.current.prev;
            counter++;
        }
        return this.current.val;
    };

    /** 
    * @param {number} steps
    * @return {string}
    */
    forward(steps) {
        let counter = 0;
        while (this.current.next != null && counter < steps) {
            this.current = this.current.next;
            counter++;
        }
        return this.current.val;
    };
};


/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */