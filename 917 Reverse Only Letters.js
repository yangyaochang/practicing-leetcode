/*
RexExp.test(str)
*/

var reverseOnlyLetters = function(S) {
    S = S.split('')

    let left = 0
    let right = S.length - 1

    while (left < right) {
        if (/[a-zA-Z]/.test(S[left]) && /[a-zA-Z]/.test(S[right])) {
            [S[left], S[right]] = [S[right], S[left]]
            left++
            right--
        } else if (/[a-zA-Z]/.test(S[left]) && !/[a-zA-Z]/.test(S[right])) {
            right--
        } else if ((!/[a-zA-Z]/.test(S[left]) && /[a-zA-Z]/.test(S[right]))) {
            left++
        } else if ((!/[a-zA-Z]/.test(S[left]) && !/[a-zA-Z]/.test(S[right]))) {
            left++
            right--
        }
    }

    return S.join('')
};

const S = "a-bC-dEf-ghIj"

console.log(reverseOnlyLetters(S))