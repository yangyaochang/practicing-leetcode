var longestSubsequence = function(arr, difference) {
    let maxLength = 0

    const findSubsequence = (index, path) => {
        if (path.length > 1 && path[path.length - 1] - path[path.length - 2] !== difference) {
            maxLength = Math.max(maxLength, path.length - 1)
            return
        }
        if (index === arr.length - 1) {
            maxLength = Math.max(maxLength, path.length)
            return
        }

        for (let i = index + 1; i < arr.length; i++) {
                path.push(arr[i])
                findSubsequence(i, path)
                path.pop()
        }
    }

    for (let i = 0; i < arr.length; i++) {
        findSubsequence(i, [arr[i]])
    }

    return maxLength
};

const arr = [3,4,-3,-2,-4]

const difference = -5

console.log(longestSubsequence(arr, difference))