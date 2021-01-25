// 直接相乘值太大的會出現誤差，所以要一個一個位數乘

var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {return '0'}
    
    const result = []

    // 用 i, j 決定結果放的位置
    for (let i = 0; i < num2.length; i++) {
        let p2 = num2.length - 1 - i // 目前的 num2 位數
        for (let j = 0; j < num1.length; j++) {
            let p1 = num1.length - 1 - j // 目前的 num1 位數

            let num = result[i + j] === undefined ? num1[p1] * num2[p2] : result[i + j] + num1[p1] * num2[p2]
            // result 在同一個位置上有值先加上來

            if (num < 10) {
                result[i + j] = num
            } else if (num >= 10) {
                result[i + j] = num % 10
                result[i + j + 1] = result[i + j + 1] === undefined ? Math.floor(num / 10) : Math.floor(num / 10) + result[i + j + 1] 
                // 下一位有值先加上來
            }
        }
    }

    return result.reverse().join('')
};