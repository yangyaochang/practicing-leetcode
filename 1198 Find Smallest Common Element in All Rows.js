/*
The smallest common element can be found in each row.
We can go through each element in the first row, and then use binary search to check if that element exists in all other rows.
*/

var smallestCommonElement = function(mat) {
    for (let i = 0; i < mat[0].length; i++) {
        for (let j = 1; j < mat.length; j++) {
            if (binarySearch(mat[j], mat[0][i]) === false) {break}
            if (j === mat.length - 1) {return mat[0][i]}
        }
    }
    return -1

    function binarySearch(arr, target) {
        let left = 0
        let right = arr.length - 1
        let mid

        while (left <= right) {
            mid = Math.floor((left + right) / 2)
            if (arr[mid] === target) {return true}
            else if (arr[mid] > target) {right = mid - 1}
            else if (arr[mid] < target) {left = mid + 1}
        }
        return false
    }
};

const mat = [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]]

console.log(smallestCommonElement(mat))