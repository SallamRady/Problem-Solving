var MinStack = function() {
    this.data = [];
    this.minX = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.data.length == 0){
        this.minX = val;
    }else{
        this.minX = Math.min(this.minX,val);
    }
    this.data.push(val);-2,0,-3
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.data[this.data.length - 1] == this.minX){
        this.data.pop();
        this.minX = Math.min(...this.data)
    }else{
        this.data.pop();
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.data.length)
        return this.data[this.data.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minX;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */