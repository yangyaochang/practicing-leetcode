var sortString = function(s) {
    const cache = {}
    let str = ''
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in cache) {
            cache[s[i]]++
        } else {
            cache[s[i]] = 1
        }
    }

    const keys = Object.keys(cache)
    keys.sort((a, b) => a.localeCompare(b))

    while (str.length < s.length) {
        for (let i = 0; i < keys.length; i++) {
            if (cache[keys[i]] > 0) {
                cache[keys[i]]--
                str += keys[i]
            }
        }
        for (let i = keys.length - 1; i >= 0; i--) {
            if (cache[keys[i]] > 0) {
                cache[keys[i]]--
                str += keys[i]
            }
        }
    }
    
    return str
};