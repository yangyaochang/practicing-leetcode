var longestOnes = function(A, K) {
    let left = -1
    let right = 0
    let maxLength = 0
    let flip = K

    while (right < A.length) {
        if (A[right] === 0) {
            if (flip > 0) {
                flip--
            } else {
                while (flip === 0) {
                    left++
                    if (A[left] === 0) {
                        flip++
                    }
                }
                continue
            }
        }
        maxLength = Math.max(maxLength, right - left)
        right++
    }
    return maxLength
};

const A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
const K = 3

console.log(longestOnes(A, K))