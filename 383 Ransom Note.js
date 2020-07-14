var canConstruct = function(ransomNote, magazine) {
    let cache = {}
    
    for (let i = 0; i < magazine.length; i++) {
        if (magazine[i] in cache) {
            cache[magazine[i]]++
        } else {
            cache[magazine[i]] = 1
        }
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        if (cache[ransomNote[i]] > 0) {
            cache[ransomNote[i]]--
        } else {
            return false
        }
    }
    return true
};