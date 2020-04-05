var isPalindrome = function(s) {
    if (!s) {return true}
    let charArr = s.toLowerCase().match(/[a-z0-9]/g)
    if (!charArr) {return true}
    let length = charArr.length

    if (length === 1) {
        return true
    } else {
        if (length % 2 === 0) {
            let secondHalf = charArr.splice(length / 2, length / 2)
            let firstHalf = charArr
            for (let i = 0; i < length / 2; i++) {
                if (firstHalf[i] === secondHalf[(length / 2) - 1 - i]) {
                    if (i === (length / 2) - 1) {
                        return true
                    } else {
                        continue
                    }
                } else {
                    return false
                }
            }
        } else if (length % 2 === 1) {
            let secondHalf = charArr.splice((length + 1) / 2, (length - 1) / 2)
            charArr.pop()
            let firstHalf = charArr
            for (let i = 0; i < (length - 1) / 2; i++) {
                if (firstHalf[i] === secondHalf[((length - 1) / 2) - 1 - i]) {
                    if (i === ((length - 1) / 2) - 1) {
                        return true
                    } else {
                        continue
                    }
                } else {
                    return false
                }
            }
        }
    }    
};