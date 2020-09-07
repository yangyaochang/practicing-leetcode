var reverseWords = function(s) {
    s.reverse()

    let left = 0
    let space = 0

    while (space < s.length) {
        while (s[space] !== ' ' && space < s.length) {
            space++
        }
        right = space - 1

        while (left < right) {
            [s[left], s[right]] = [s[right], s[left]]
            left++
            right--
        }
        left = space + 1
        space++
    }

    return s
}

const s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]

console.log(reverseWords(s))