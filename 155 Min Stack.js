class MinStack{
    constructor() {
        this.data = []
        this.length = 0
    }

    push(value) {
        let min
        let dataPair
        if (this.length === 0) {
            min = value
            dataPair = [value, min]
            this.data.push(dataPair)
            this.length++ 
        } else {
            min = (value < this.data[this.length - 1][1]) ? value : this.data[this.length - 1][1]
            dataPair = [value, min]
            this.data.push(dataPair) 
            this.length++ 
        }

        return this
    }

    pop() {
        this.data.pop()
        this.length--
        return this
    }

    top() {
        return this.data[this.length - 1][0]
    }

    //Retrieving the minimum element in constant time
    getMin() {
        return this.data[this.length - 1][1]
    }
}