var findContestMatch = function(n) {
    let numArr = []
    
    for (let i = 1; i <= n; i++) {
        numArr.push(i)
    }
    
    const combine = (arr) => {
        if (arr.length === 2) {return arr}
        
        let left = 0
        let right = arr.length - 1
        let list = []
        
        while (left < right) {
            let pair = `(${arr[left]},${arr[right]})`
            list.push(pair)
            left++
            right--
        }
        return combine(list)
    }
    
    return `(${combine(numArr).join(',')})`
};