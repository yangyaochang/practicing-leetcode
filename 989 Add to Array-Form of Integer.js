var addToArrayForm = function(A, K) {
    K = K.toString().split('')
    let nums = []

    for (let i = 0; i < K.length; i++) {
        nums.push(Number(K[i]))
    }

    if (nums.length > A.length) {
        let temp = A
        A = nums
        nums = temp
    }

    let p1 = A.length - 1
    let p2 = nums.length - 1
    let carry = 0

    while (p2 >= 0) {
        if (A[p1] + nums[p2] + carry >= 10) {
            A[p1] = (A[p1] + nums[p2] + carry) % 10
            carry = 1
        } else {
            A[p1] = A[p1] + nums[p2] + carry
            carry = 0
        }
        p1--
        p2--
    }

    while (carry > 0 && p1 >= 0) {
        if (A[p1] + carry >= 10) {
            A[p1] = (A[p1] + carry) % 10
            carry = 1
        } else {
            A[p1] = A[p1] + carry
            carry = 0
        }
        p1--
    }

    if (carry > 0) {A.unshift(carry)}

    return A
};

const A = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3]
const K = 516

console.log(addToArrayForm(A, K))