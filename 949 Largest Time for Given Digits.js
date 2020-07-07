var largestTimeFromDigits = function(A) {
    let list = []
    let index = new Set()
    let largestNum = 0
    let largestTime = '0000'
    
    const getTime = (str) => {
        
        if (index.size === A.length) {
            if (Number(str) < 2400) {list.push(str)}
            return
        }
        if (index.size === 2 && Number(str) >= 24) {return}
        if (index.size === 3 && str[2] > 5) {return}

        for (let i = 0; i < A.length; i++) {
            if (!index.has(i)) {
                index.add(i)
                getTime(str + A[i])
                index.delete(i)
            }
        }
    }
    
    getTime('')
    
    if (list.length === 0) {return ''}
    else {
        for (let i = 0; i < list.length; i++) {
            if (Number(list[i]) > largestNum) {
                largestNum = Number(list[i])
                largestTime = list[i]
            }
        }

        return largestTime[0] + largestTime[1] + ':' + largestTime[2] + largestTime[3]
    }
};

const A = [0,0,0,0]

console.log(largestTimeFromDigits(A))