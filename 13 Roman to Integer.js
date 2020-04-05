var romanToInt = function(s) {
    const cheatSheet = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000 
    }

    let letter = s.split('')
    let sum = 0

    for (let i = 0; i < letter.length; i++) {
        if (i === letter.length - 1) {
            sum = sum + cheatSheet[letter[i]]
        } else {
            if (cheatSheet[letter[i]] >= cheatSheet[letter[i + 1]]) {
                sum = sum + cheatSheet[letter[i]]
            } else {
                sum = sum + cheatSheet[letter[i + 1]] - cheatSheet[letter[i]]
                i++
            }
        }
    }
    return sum
};

let s = "III"
console.log(romanToInt(s)) 