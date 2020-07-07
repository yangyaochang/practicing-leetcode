var generatePossibleNextMoves = function(s) {
    let list = []

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '+' && s[i + 1] === '+') {
            let copy = s.split('')
            copy[i] = '-'
            copy[i + 1] = '-'
            list.push(copy.join(''))
        }
    }

    return list
};

const s = '++++'

console.log(generatePossibleNextMoves(s))