var arraysIntersection = function(arr1, arr2, arr3) {
    let p1 = 0
    let p2 = 0
    let p3 = 0
    const list = []

    while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
        if (arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
            list.push(arr1[p1])
            p1++
            p2++
            p3++
        } else {
            if (arr1[p1] === Math.min(arr1[p1], arr2[p2], arr3[p3])) {
                p1++
            } else if (arr2[p2] === Math.min(arr1[p1], arr2[p2], arr3[p3])) {
                p2++
            } else if (arr3[p3] === Math.min(arr1[p1], arr2[p2], arr3[p3])) {
                p3++
            }
        }
    }

    return list
};

const arr1 = [1,2,3,4,5]
const arr2 = [1,2,5,7,9]
const arr3 = [1,3,4,5,8]

console.log(arraysIntersection(arr1, arr2, arr3))