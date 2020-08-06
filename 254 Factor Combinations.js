/*
求組合，思考 path, options, base cases 來建立窮舉的樹狀邏輯
再找出 recursion 需要的常數與 base case
用模板考慮細部邏輯
*/

var getFactors = function(n) {
    const list = []
    if (n === 1) {return list}

    const divide = (currentNum, start, path) => {
        if (currentNum === 1) {
            list.push([...path])
            return
        }

        for (let i = start; i <= currentNum; i++) {
            if (i === n) {continue}
            if (currentNum % i === 0) {
                path.push(i)
                divide(currentNum / i, i, path)
                path.pop()
            }
        }
    }

    divide(n, 2, [])
    return list
};

const n = 12

console.log(getFactors(n))