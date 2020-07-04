var validWordSquare = function(words) {
    for (let i = 0 ; i < words.length; i++) {
        let str1 = words[i]
        let str2 = ''
        let j = 0
        while ( j < words.length && words[j][i] !== undefined) {
            str2 += words[j][i]
            j++
        }
        if (str1 !== str2) {return false}
    }
    return true
};

const words =["abcd","bnrt","crm","dt"]

console.log(validWordSquare(words))