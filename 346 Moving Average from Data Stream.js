/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.window = []
    this.size = size
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.window.length < this.size) {
        this.window.push(val)
    } else if (this.window.length === this.size) {
        this.window.shift()
        this.window.push(val)
    }
    let sum = 0
    for (let i = 0; i < this.window.length; i++) {
        sum += this.window[i]
    }
    return sum / this.window.length
};