/*
應該是要用球排列的方式
*/

var countSteppingNumbers = function(low, high) {
    const list = []
    
    for (let i = low; i <= high; i++) {
        if (isSteppingNum(i)) {list.push(i)}
    }
    
    return list
    
    function isSteppingNum(num) {
        num = num.toString()
        
        for (let i = 0; i < num.length - 1; i++) {
            if (Math.abs(num[i] - num[i + 1]) !== 1) {return false}
        }
        return true
    }
};

const low = 0
const high = 21

console.log(countSteppingNumbers(low, high))
