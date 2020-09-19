/*
兩次做法的 condition 不同，但都通，關鍵在於如建立窮舉邏輯，在每個 state 下有什麼選擇要窮舉
*/

var generateParenthesis = function(n) {
    let list = []
    const addParenthesis = (current, open, close) => {
        if (current.length === n * 2) {
            list.push(current)
            return
        }

        if (open < n) {
            addParenthesis(current + '(', open + 1, close)
        }
        if (open > close) {
            addParenthesis(current + ')', open, close + 1)
        }
    }

    addParenthesis('', 0, 0)
    return list
};

// 第二次做

var generateParenthesis = function(n) {
    const list = []

    const addParenthesis = (path, left, right) => {
        if (path.length === 2 * n) {
            list.push(path)
            return
        }

        if (left > right) {
            if (left < n) {addParenthesis(path + '(', left + 1, right)}
            addParenthesis(path + ')', left, right + 1)
        }
        if (left === right) {
            addParenthesis(path + '(', left + 1, right)
        }
    }

    addParenthesis('', 0, 0)
    return list
}

const n = 3

console.log(generateParenthesis(n))

// 第三次做

var generateParenthesis = function(n) {
    const list = []

    const generate = (str, open, close) => {
        if (open === n && close === n) {
            list.push(str)
            return
        }
        if (open > n) {return}

        if (open === close) {
            generate(str + '(', open + 1, close)
        } else if (open > close) {
            generate(str + '(', open + 1, close)
            generate(str + ')', open, close + 1)
        }
    }

    generate('', 0, 0)
    return list
};