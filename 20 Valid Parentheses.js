/*
Use an array as a stack
*/

var isValid = function(s) {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        } else {
            const left = stack.pop()

            if ((s[i] === ')' && left !== '(') || (s[i] === '}' && left !== '{') || (s[i] === ']' && left !== '[')) {
                return false
            }
        }
    }
    return stack.length === 0
}

const s = "()[]{}"

console.log(isValid(s))

// 第三次做

var isValid = function(s) {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        } else if (s[i] === ')') {
            if (stack.pop() !== '(') {return false}
        } else if (s[i] === ']') {
            if (stack.pop() !== '[') {return false}
        } else if (s[i] === '}') {
            if (stack.pop() !== '{') {return false}
        }
    }
    return stack.length === 0
}

// 第四次做

var isValid = function(s) {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        } else if (s[i] === ')') {
            if (stack.pop()!== '(') {return false}
        } else if (s[i] === ']') {
            if (stack.pop()!== '[') {return false}
        } else if (s[i] === '}') {
            if (stack.pop()!== '{') {return false}
        }
    }

    return stack.length === 0
}

// 第五次做

var isValid = function(s) {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        } else {
            if (
                (s[i] === ')' && stack[stack.length - 1] !== '(') ||
                (s[i] === ']' && stack[stack.length - 1] !== '[') ||
                (s[i] === '}' && stack[stack.length - 1] !== '{')
            ) {
                return false
            }
            stack.pop()
        } 
    }

    return stack.length === 0
};


var isValid = function(s) {
    let opening = new Stack()
    let parenthesesArr = s.split('')

    if (parenthesesArr.length === 0) {
        return true
    }

    for (let i = 0; i < parenthesesArr.length; i++) {
        if (parenthesesArr[i] === '(' || parenthesesArr[i] === '{' || parenthesesArr[i] === '[') {
            if (i === parenthesesArr.length - 1) {
                return false
            } else {
                opening.push(parenthesesArr[i])
            }
        } else {
            if ((parenthesesArr[i] === ')' && opening.peek() === '(') || (parenthesesArr[i] === '}' && opening.peek() === '{') || (parenthesesArr[i] === ']' && opening.peek() === '[')) {
                if (i === parenthesesArr.length - 1 && opening.data.length === 1) {
                    return true
                } else if (i === parenthesesArr.length - 1 && opening.data.length !== 1) {
                    return false
                } else {
                    opening.pop()
                }
            } else {
                return false
            }
        }
    }
};

class Stack {
    constructor() {
        this.data = []
    }

    peek() {
        return this.data[this.data.length - 1]
    }

    pop() {
        return this.data.pop()
    }

    push(value) {
        this.data.push(value)
        return this
    }
}

let s = "()[]{}"
console.log(isValid(s))