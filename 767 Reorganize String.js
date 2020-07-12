var reorganizeString = function(S) {
    let cache = new Map()
    let maxHeap = []
    let str = ''

    for (let i = 0 ; i < S.length; i++) {
        if (cache.has(S[i])) {
            let times = cache.get(S[i])
            cache.set(S[i], times + 1)
        } else {
            cache.set(S[i], 1)
        }
    }

    for (let item of cache.entries()) {
        maxHeap.push([item[0], item[1]])
    }

    for (let i = maxHeap.length - 1; i >= 0; i--) {
        bubbleDown(i)
    }

    while (maxHeap.length > 1) {
        let first = popPeak()
        let second = popPeak()

        if (str[str.length - 1] !== first[0]) {
            str += first[0]
            first[1]--
            if (first[1] > 0) {push(first)}
            push(second)
        } else {
            str += second[0]
            second[1]--
            if (second[1] > 0) {push(second)}
            push(first)
        }
    }

    if (maxHeap[0][1] !== 1) {return ''}
    return str += maxHeap[0][0]

    function push(val) {
        maxHeap.push(val)
        bubbleUp(maxHeap.length - 1)
    }

    function popPeak() {
        [maxHeap[0], maxHeap[maxHeap.length - 1]] = [maxHeap[maxHeap.length - 1], maxHeap[0]]
        let max = maxHeap.pop()
        bubbleDown(0)
        return max
    }

    function bubbleDown(parent) {
        let child = getChild(parent)
        console.log(parent, child)

        while (child < maxHeap.length && maxHeap[child][1] > maxHeap[parent][1]) {
            [maxHeap[child], maxHeap[parent]] = [maxHeap[parent], maxHeap[child]]
            parent = child
            child = getChild(parent)
        }
    }

    function bubbleUp(child) {
        let parent = getParent(child)

        while (child > 0 && maxHeap[child][1] > maxHeap[parent][1]) {
            [maxHeap[child], maxHeap[parent]] = [maxHeap[parent], maxHeap[child]]
            child = parent
            parent = getParent(child)
        }
    }

    function getParent(child) {
        return Math.floor((child - 1) / 2)
    }

    function getChild(parent) {
        let left = 2 * parent + 1
        let right = 2 * parent + 2


        if (left > maxHeap.length - 1) {return left}
        else if (right > maxHeap.length - 1) {return left}
        else if (maxHeap[left][1] > maxHeap[right][1]) {return left}
        else {return right}
    }
};

const S = "sfffp"

console.log(reorganizeString(S))