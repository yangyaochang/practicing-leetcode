var isAlienSorted = function(words, order) {
    let alphabetSheet = {}
    order.split('').forEach((item, index) => {
        alphabetSheet[item] = index
    })

    for (let j = 0; j < words.length - 1; j++) {
        let left = words[j].split('')
        let right = words[j + 1].split('')
        let shortLength = (left.length < right.length) ? left.length : right.length
        
        console.log([left, right, shortLength])
        
        for (let k = 0; k < shortLength; k++) {
            
            console.log([alphabetSheet[left[k]], alphabetSheet[right[k]]])
            
            if (alphabetSheet[left[k]] > alphabetSheet[right[k]]) {
                return false
            } else if (alphabetSheet[left[k]] < alphabetSheet[right[k]]) {
                k = shortLength - 1
            } else if (alphabetSheet[left[k]] === alphabetSheet[right[k]]) {
                if (k === shortLength - 1 && right.length < left.length) {
                    return false
                } else {
                    continue
                }
            } 
        }
        if (j === words.length - 2) {
            return true
        }
    }
};