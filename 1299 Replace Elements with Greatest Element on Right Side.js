var replaceElements = function(arr) {
    let list = []
    let max = arr[arr.length - 1]

    for (let i = arr.length - 1; i >= 0; i--) {
        if (i === arr.length - 1) {
            list.push(-1)
        } else {
            list.push(max)
            max = Math.max(max, arr[i])
        }
    }

    return list.reverse()
};

const arr = [17,18,5,4,6,1]

console.log(replaceElements(arr))