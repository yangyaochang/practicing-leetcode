/*
只有 () 會貢獻實質的分數，可以找到每一個 () 對應的深度 x，那麼答案就是 2^x 的累加和。
*/

var scoreOfParentheses = function(S) {
    let count = 0
    let sum = 0
    
    for (let i = 1; i < S.length; i++) {
        if (S[i] === '(') {count++}
        else {
            if (S[i - 1] === '(') {
                sum += Math.pow(2, count)
            } 
            count--
        }
    }
    return sum
};