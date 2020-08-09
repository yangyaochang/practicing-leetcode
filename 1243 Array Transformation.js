var transformArray = function(arr) {
    while (true) {
        let next = false
        const changed = new Array(arr.length)
        changed.fill(0)

        for (let i = 1; i < arr.length - 1; i++) {
            if (arr[i - 1] > arr[i] && arr[i + 1] > arr[i]) {
                changed[i] = 1
                next = true
            } else if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
                changed[i] = -1
                next = true
            }
        }
    
        arr = arr.map((value, index) => value += changed[index])
        if (!next) {break}
    } 

    return arr
};

const arr = [2,1,2,1,1,2,2,1]

console.log(transformArray(arr))
