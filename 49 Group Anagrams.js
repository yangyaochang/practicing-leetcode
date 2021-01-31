/*
關鍵在於知道如果是 anagram，兩個字排序後會是一樣的
*/

var groupAnagrams = function(strs) {
    const cache = {}
    const list = []

    let sortedStrs = strs.map(str => {
        str = str.split('')
        str.sort((a, b) => a.localeCompare(b))
        return str.join('')
    })

    for (let i = 0; i < sortedStrs.length; i++) {
        if (sortedStrs[i] in cache) {
            cache[sortedStrs[i]].push(i)
        } else {
            cache[sortedStrs[i]] = [i]
        }
    }

    const keys = Object.keys(cache)

    for (let i = 0; i < keys.length; i++) {
        const group = []

        for (let j = 0; j < cache[keys[i]].length; j++) {
            group.push(strs[cache[keys[i]][j]])
        }
        list.push(group)
    }
    return list
}

const strs = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strs))

// 這種做法很耗時

var groupAnagrams = function(strs) {
    const list = []
    const used = new Array(strs.length).fill(false)

    for (let i = 0; i < strs.length; i++) {
        if (used[i]) {continue}
        const group = [strs[i]]
        used[i] = true

        for (let j = i + 1; j < strs.length; j++) {
            if (isAnagram(strs[i], strs[j]) === true) {
                group.push(strs[j])
                used[j] = true
            }
        }
        list.push(group)
    }

    return list
    
    function isAnagram(s1, s2) {
        if (s1.length !== s2.length) {return false}
        
        const cache = {}

        for (let i = 0; i < s1.length; i++) {
            if (s1[i] in cache) {
                cache[s1[i]]++
            } else {
                cache[s1[i]] = 1
            }
        }

        for (let i = 0; i < s2.length; i++) {
            if (s2[i] in cache && cache[s2[i]] > 0) {cache[s2[i]]--}
            else {return false}
        }

        for (let keys in cache) {
            if (cache[keys] !== 0) {return false}
        }
        return true
    }
}

// 另外一種做法 如果是 anagram 排序後會長一模一樣
// 建立一個 hash map 頗排序後的結果為 key 原本的 str 為 value
// loopt through hash map  得到結果

var groupAnagrams = function(strs) {
    const list = []
    const cache = {}

    for (let i = 0; i < strs.length; i++) {
        const sorted = strs[i].split('').sort((a, b) => a.localeCompare(b)).join('')
        if (sorted in cache) {
            cache[sorted].push(strs[i])
        } else {
            cache[sorted] = [strs[i]]
        }
    }

    for (let keys in cache) {
        list.push(cache[keys])
    }

    return list
}

