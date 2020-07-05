class KthLargest{
    constructor(k, nums) {
        this.size = k
        this.minHeap = []

        for (let i = 0; i < nums.length; i++) {
            this.add(nums[i])
        }
    }

    add(val) {
        if (this.minHeap.length < this.size) {
            this.minHeap.push(val)
            this.bubbleUp(this.minHeap.length - 1)
        } else {
            if (val > this.peak()) {
                this.popPeak()
                this.minHeap.push(val)
                this.bubbleUp(this.minHeap.length - 1)
            }
        }
        return this.peak()
    }

    popPeak() {
        [this.minHeap[0], this.minHeap[this.minHeap.length - 1]] = [this.minHeap[this.minHeap.length - 1], this.minHeap[0]]
        this.minHeap.pop()
        this.bubbleDown(0)
    }

    getChild(parentIndex) {
        let leftChild = 2 * parentIndex + 1
        let rightChild = 2 * parentIndex + 2

        if (leftChild > this.minHeap.length - 1) {
            return leftChild
        } else if (rightChild > this.minHeap.length - 1) {
            return leftChild
        } else if (this.minHeap[leftChild] < this.minHeap[rightChild]) {
            return leftChild
        } else {
            return rightChild
        }
    }

    getParent(childIndex) {
        return Math.floor((childIndex - 1) / 2)
    }

    bubbleDown(parentIndex) {
        let childIndex = this.getChild(parentIndex)

        while (childIndex < this.minHeap.length && this.minHeap[childIndex] < this.minHeap[parentIndex]) {
            [this.minHeap[childIndex], this.minHeap[parentIndex]] = [this.minHeap[parentIndex], this.minHeap[childIndex]]
            parentIndex = childIndex
            childIndex = this.getChild(parentIndex)
        }
    }

    bubbleUp(childIndex) {
        let parentIndex = this.getParent(childIndex)    

        while (childIndex > 0 && this.minHeap[childIndex] < this.minHeap[parentIndex]) {
            [this.minHeap[childIndex], this.minHeap[parentIndex]] = [this.minHeap[parentIndex], this.minHeap[childIndex]]
            childIndex = parentIndex 
            parentIndex = this.getParent(childIndex)
        }
    }

    peak() {
        return this.minHeap[0]
    }
}

const k = 3;
const nums = [8, 5, 4];

let kLargest = new KthLargest(k, nums)
console.log(kLargest.minHeap)

console.log(kLargest.add(3))
console.log(kLargest.add(5))
console.log(kLargest.add(10))
console.log(kLargest.add(9))
console.log(kLargest.add(4))




