var isLongPressedName = function(name, typed) {
    let name_i = 0
    let typed_i = 0

    while (typed_i < typed.length && name_i < name.length) {
        if (name[name_i] === typed[typed_i]) {
            name_i++
            typed_i++
        } else if (name[name_i] !== typed[typed_i]) {
            // 如果與前一個字母一樣才前進
            if (typed[typed_i] === typed[typed_i - 1]) {typed_i++}
            else {return false}
        }
    }

    if (name_i === name.length) {
        for (let i = typed_i; i < typed.length; i++) {
            if (typed[typed_i - 1] !== typed[i]) {return false}
        }
        return true
    }
    return false
};

const name = "alex"
const typed = "aaleelx"

console.log(isLongPressedName(name, typed))