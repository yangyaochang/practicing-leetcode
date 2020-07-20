/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
    this.data = {}
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (key in this.data) {
        this.data[key].push([timestamp, value])
    } else {
        this.data[key] = [[timestamp, value]]
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let values = this.data[key]
    
    if (timestamp < values[0][0]) {return ''}
    if (timestamp > values[values.length - 1][0]) {return values[values.length - 1][1]}
    
    let left = 0
    let right = values.length - 1
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        
        if (values[mid][0] === timestamp) {return values[mid][1]}
        else if (values[mid][0] > timestamp) {right = mid - 1}
        else if (values[mid][0] < timestamp) {left = mid + 1}
    }
    return values[right][1]
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */