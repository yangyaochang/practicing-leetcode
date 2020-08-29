var uniqueOccurrences = function(arr) {
    const frequency = {}
    const nums = new Set()
    
    arr.forEach(num => {
        if (num in frequency) {frequency[num]++}
        else {frequency[num] = 1}
    })
    
    const keys = Object.keys(frequency)
    
    for (let i = 0; i < keys.length; i++) {
        if (nums.has(frequency[keys[i]])) {
            return false
        }
        else {nums.add(frequency[keys[i]])}
    }
    return true
};

const arr = [1,2]
console.log(uniqueOccurrences(arr))