var addStrings = function(num1, num2) {
    let base = '0'.charCodeAt(0)

    let findActualValue = (numInString) => {
        let digitArr = numInString.split('')
        let actualNum = 0

        for (let i = 0; i < numInString.length; i++) {
            let digit = digitArr.pop()
            digit = digit.charCodeAt(0) - base
            actualNum = actualNum + digit * Math.pow(10, i)
        }

        return actualNum
    }

    let sum = findActualValue(num1) + findActualValue(num2)
    return sum + ''
};

let num1 = "9333852702227987"
let num2 = "85731737104263"
console.log(addStrings(num1, num2))