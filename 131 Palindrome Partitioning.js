var partition = function(s) {
    const list = []
    
    const partition = (left, partitions) => {
        if (left === s.length) {
            list.push([...partitions])
            return
        }

        for (let right = left + 1; right <= s.length; right ++) {
            const subStr = s.slice(left, right)

            if (isPalindromic(subStr)) {
                partitions.push(subStr)
                partition(right, partitions)
                partitions.pop()
            }
        }
    }

    partition(0, [])
    return list
    
    function isPalindromic(str) {
        let left = 0
        let right = str.length - 1

        if (str.length === 0) {return false}

        while (left <= right) {
            if (str[left] === str[right]) {
                left++
                right--
            } else {return false}
        }
        return true
    }
};

const s = "aab"

console.log(partition(s))