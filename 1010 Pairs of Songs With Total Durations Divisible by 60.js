var numPairsDivisibleBy60 = function(time) {
    let count = 0

    for (let i = 0; i < time.length; i++) {
        for (let j = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 === 0) {
                count++
            }
        }
    }
    return count
};

const time = [30,20,150,100,40]

console.log(numPairsDivisibleBy60(time))