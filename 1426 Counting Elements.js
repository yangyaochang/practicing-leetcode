var countElements = function(arr) {
    const cache = new Set()
    let count = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (!cache.has(arr[i])) {cache.add(arr[i])}
    }

    for (let i = 0; i < arr.length; i++) {
        if (cache.has(arr[i] + 1)) {count++}
    }

    return count
};

const arr = [1,3,2,3,5,0]

console.log(countElements(arr))