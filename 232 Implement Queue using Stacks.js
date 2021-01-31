/*
用兩個 stack 建立一個 queue
*/

var MyQueue = function() {
    this.pushStack = []
    this.popStack = []
};

MyQueue.prototype.push = function(x) {
    while (this.popStack.length > 0) {
        this.pushStack.push(this.popStack.pop())
    }
    this.pushStack.push(x)
};

MyQueue.prototype.pop = function() {
    while (this.pushStack.length > 0) {
        this.popStack.push(this.pushStack.pop())
    }
    return this.popStack.pop()
};

MyQueue.prototype.peek = function() {
    if (this.empty()) {return null}
    return this.pushStack.length > 0 ? this.pushStack[0] : this.popStack[this.popStack.length - 1]
};

MyQueue.prototype.empty = function() {
    return this.pushStack.length === 0 && this.popStack.length === 0
};