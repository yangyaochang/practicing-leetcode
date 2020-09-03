/*
每一個步驟在嘗試找出下一個 palindrome，如果 sub string 是 palindrome，就放到 path 裡面並找下一個 palindrome

這題的樹狀結構會發現不需要 return 也不會 stack overflow

因為是 string 所以要能切出一小部分就是靠 slice()，所以需要兩個 pointers

注意窮舉中的列舉各種可能就是靠 iteration，往這方面去想就比較好反推流程
*/

var partition = function(s) {
    const isPalindrome = (str) => {
        let left = 0
        let right = str.length - 1

        while (left <= right) {
            if (str[left] === str[right]) {
                left++
                right--
            } else {
                return false
            }
        }
        return true
    }

    const list = []

    const tryPartition = (start, path) => {
        if (start === s.length) {
            list.push([...path])
            // return
            // 仔細看窮舉的邏輯，沒有 return 也不會繼續調用 recursion 所以不需要 return 來終止遞迴
        }

        for (let end = start + 1; end <= s.length; end++) {
            const subStr = s.slice(start, end)
            if (isPalindrome(subStr)) {
                path.push(subStr)
                tryPartition(end, path)
                path.pop()
            }
        }
    }

    tryPartition(0, [])
    return list
}

const s = "aab"

console.log(partition(s))

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

/*
這題的重點在如何 partition 一個 string
直覺上需要使用 two pointers 與 string.slice()
*/

var partition = function(s) {
    const list = []

    const dfs = (left, path) => {
        if (left === s.length) {
            list.push([...path])
            return
        }

        for (let right = left + 1; right <= s.length; right ++) {
            const subStr = s.slice(left, right)
            if (isPalindrome(subStr)) {
                path.push(subStr)
                dfs(right, path)
                path.pop()
            }
        }
    }

    dfs(0, [])
    return list

    function isPalindrome(str) {
        let left = 0
        let right = str.length - 1

        while (left <= right) {
            if (str[left] === str[right]) {
                left++
                right--
            } else {
                return false
            }
        }
        return true
    }
};

const s = "aab"

console.log(partition(s))