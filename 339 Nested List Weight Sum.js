/*
如果 array 本身沒有 nested，那麼 for loop 執行完不會再 call 下一個 recursion 所以不用額外設 base case
*/

var depthSum = function(nestedList) {
    let sum = 0

    const decompose = (arr, weight) => {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                sum += arr[i] * weight
            } else if (typeof arr[i] === 'object') {
                decompose(arr[i], weight + 1)
            }
        }
    }
    decompose(nestedList, 1)
    return sum
};

const nestedList = [1,[4,[6]]]

console.log(depthSum(nestedList))