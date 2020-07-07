var maxAbsValExpr = function(arr1, arr2) {
    let max = 0

    for (let i = 0; i < arr1.length; i++) {
        for (j = i + 1; j < arr1.length; j++) {
            let value = Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + Math.abs(i - j)
            max = Math.max(max, value)
        }
    }
    return max
};

const arr1 = [1,-2,-5,0,10]
const arr2 = [0,-2,-1,-7,-4]

console.log(maxAbsValExpr(arr1, arr2))
