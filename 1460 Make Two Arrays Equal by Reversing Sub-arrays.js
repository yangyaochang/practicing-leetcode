var canBeEqual = function(target, arr) {
    const items = {}

    for (let i = 0; i < target.length; i++) {
        if (target[i] in items) {items[target[i]]++}
        else {items[target[i]] = 1}
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in items) {
            if (items[arr[i]] > 1) {items[arr[i]]--}
            else {delete items[arr[i]]}
        }
        else {return false}
    }
    return Object.keys(items).length === 0
};

const target = [1,2,3,4]
const arr = [2,4,1,3]

console.log(canBeEqual(target, arr))