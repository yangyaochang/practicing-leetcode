/*
用到 Binary Heap 的題目通常都會出現要反覆取最大或最小的值，如果每次都完整排序，每次都會需要 O(nlogn) 操作
用 Binary heap 可以用 O(logn) 操作維持 array 的結構讓每次從頭部都取得最大或最小值
*/

var lastStoneWeight = function(stones) {
    for (let i = stones.length - 1; i >=0; i--) {
        bubbbleDown(i)
    }
    
    while (stones.length > 1) {
        let stone1 = popPeak()
        let stone2 = popPeak()

        if (stone1 - stone2 !== 0) {
            push(Math.abs(stone1 - stone2))
        }
    }

    if (stones.length === 0) {return 0}
    return stones[0]
    
    function push(val) {
        stones.push(val)
        bubbleUp(stones.length - 1)
    }
    
    function popPeak() {
        [stones[0], stones[stones.length - 1]] = [stones[stones.length - 1], stones[0]]
        let max = stones.pop()
        bubbbleDown(0)
        return max
    }

    function bubbbleDown(parent) {
        let child = getChild(parent)

        while (child < stones.length && stones[child] > stones[parent]) {
            [stones[child], stones[parent]] = [stones[parent], stones[child]]
            parent = child
            child = getChild(parent)
        }
    }

    function getChild(parent) {
        let left = 2 * parent + 1
        let right = 2 * parent + 2

        if (left > stones.length - 1) {
            return left
        } else if (right > stones.length - 1) {
            return left
        } else if (stones[right] < stones[left]) {
            return left
        } else {
            return right
        }
    }

    function bubbleUp(child) {
        let parent = getParent(child)

        while (child > 0 && stones[child] > stones[parent]) {
            [stones[child], stones[parent]] = [stones[parent], stones[child]]
            child = parent
            parent = getParent(child)
        }
    }

    function getParent(child) {
        return Math.floor((child - 1) / 2)
    }
};

const stones = [9,3,2,10]

console.log(lastStoneWeight(stones))