var generateAbbreviations = function(word) {
    const list = []

    const shorten = (path, index) => {
        if (index === word.length) {
            list.push(path.join(''))
            return
        }

        path.push(word[index])
        shorten(path, index + 1)
        path.pop()

        if (typeof path[path.length - 1] === 'number') {
            path[path.length - 1]++
            shorten(path, index + 1)
            path[path.length - 1]--
        } else {
            path.push(1)
            shorten(path, index + 1)
            path.pop()
        }
    }

    shorten([], 0)
    return list
}

const word = 'word'

console.log(generateAbbreviations(word))