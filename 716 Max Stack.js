class MaxStack {
    constructor() {
        this.data = []
        this.length = 0
    }

    push(value) {
        let max
        let valuePair
        if (this.length === 0) {
            max = value
            valuePair = [value, max]
            this.data.push(valuePair)
            this.length++
        } else {
            max = (value > this.data[this.length - 1][1]) ? value : this.data[this.length - 1][1]
            valuePair = [value, max]
            this.data.push(valuePair)
            this.length++
        }
        return this
    }

    pop() {
        this.length--
        return this.data.pop()[0]
    }

    top() {
        return this.data[this.length - 1][0]
    }

    peekMax() {
        return this.data[this.length - 1][1]
    }

    popMax() {
        let max = this.peekMax()
        if (this.data[this.length - 1][0] === max) {
            this.data.pop()
            this.length--
        } else {
            for (let i = this.length - 2; i >= 0; i--) {
                if (this.data[i][0] === max) {
                    let dataAfterMax = this.data.splice(i + 1, this.length - i - 1)
                    this.length = i + 1
                    this.data.pop()
                    this.length--
                    dataAfterMax.forEach(data => {
                        this.push(data[0])
                    })
                    break
                }
            }
        }
        return max
    }
}

let maxStack = new MaxStack()
console.log(maxStack.push(5))
console.log(maxStack.push(1))
console.log(maxStack.popMax())
console.log(maxStack)
console.log(maxStack.peekMax())