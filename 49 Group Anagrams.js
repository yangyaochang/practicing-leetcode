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

