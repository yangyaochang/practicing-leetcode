var longestCommonPrefix = function(strs) {
    let longest = ''
    
    if (strs.length === 0) {return longest}

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[0][i] !== strs[j][i]) {
                return longest
            }
        }
        longest += strs[0][i]
    }
    return longest
};

const strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs))