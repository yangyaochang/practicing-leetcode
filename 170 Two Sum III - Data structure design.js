/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.data = []
    this.cache = {}
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    if (number in this.cache === false) {
        this.data.push(number)
        this.cache[number] = [this.data.length - 1]
    } else {
        this.data.push(number)
        this.cache[number].push(this.data.length - 1)
    }
}; 

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (let i = 0; i < this.data.length; i++) {
        if (value - this.data[i] in this.cache) {
            if (this.data[i] !== value - this.data[i]) {return true}
            if (this.cache[this.data[i]].length > 1)  {return true}
        }
    }
    return false
};