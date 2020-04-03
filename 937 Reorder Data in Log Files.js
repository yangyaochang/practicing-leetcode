var reorderLogFiles = function(logs) {
    let digitLog = []
    let letterLog = []

    logs.forEach(log => {
        let firstChar = log.split(' ')[1].split('')[0]
        if (firstChar === '0' || firstChar === '1' || firstChar === '2' || firstChar === '3' || firstChar === '4' || firstChar === '5' || firstChar === '6' || firstChar === '7' || firstChar === '8' || firstChar === '9') {
            digitLog.push(log)
        } else {
            letterLog.push(log)
        }
    })

    letterLog.sort((let_a, let_b) => {
        let splited_a = let_a.split(' ')
        let splited_b = let_b.split(' ')
        let times = (splited_a.length > splited_b.length) ? splited_b.length - 1 : splited_a.length - 1

        for (let i = 0; i < times; i++) {
            let value = splited_a[i + 1].localeCompare(splited_b[i + 1])
            if (value === 0) {
                if (i === times - 1) {
                    let subtraction = splited_a.length - splited_b.length
                    return (subtraction === 0) ? splited_a[0].localeCompare(splited_b[0]) : subtraction
                } else {
                    continue
                }
            } else {
                return value
            }
        }
    })

    return letterLog.concat(digitLog)
};

let logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
console.log(reorderLogFiles(logs))