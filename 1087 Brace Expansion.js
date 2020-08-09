var expand = function(S) {
    const options = []
    const list = []

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '{') {
            const item = []
            i++
            while (S[i] !== '}') {
                if (S[i] !== ',') {item.push(S[i])}
                i++
            }
            options.push(item)
        } else {
            options.push(S[i])
        }
    }

    const construct = (str, index) => {
        if (index === options.length) {
            list.push(str)
            return
        }

        if (options[index].length > 1) {
            for (let i = 0; i < options[index].length; i++) {
                construct(str + options[index][i], index + 1)
            }
        } else {
            construct(str + options[index], index + 1)
        }
    }

    construct('', 0)
    list.sort((a, b) => a.localeCompare(b))
    return list
};

const S = "{a,b}c{d,e}f"

console.log(expand(S))