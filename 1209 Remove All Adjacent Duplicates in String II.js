var removeDuplicates = function(s, k) {
    let stack = [1]
    s = s.split('')

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[i + 1]) {
            stack.push(1)
        } else if (s[i] === s[i + 1]) {
            stack[stack.length - 1]++

            if (stack[stack.length - 1] === k) {
                stack.pop()
                s.splice(i + 2 - k, k)
                i = i - k
            }
        }
    } 

    return s.join('')
};

const s = "pbbcggttciiippooaais"
const k = 2

console.log(removeDuplicates(s, k))