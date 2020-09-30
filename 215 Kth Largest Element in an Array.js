/*
整個 array 排序再返回指定的 element 是很直接的想法
Time Complexity: O(nlogn)
Space Complexity: O(logn)

但是也可以使用 Max Heap(Binary Heap)
Heapify 的過程使用 Bottom-up approach 是 O(n)
取道第 k 個最大是 O(klogn)，因為每取一個要調用一次 bubbleDown() to maintain heap condition
Time Complexity: O(klogn)
Space Complexity: O(1) since I am not using extra array
*/

// Quick Sort

var findKthLargest = function(nums, k) {
    nums = quicksort(nums)

    return nums[nums.length - k]

    function quicksort(arr) {
        const divide = (s, e) => {
            if (s >= e) {return}

            let m = s
            for (let i = s; i < e; i++) {
                if (arr[i] < arr[e]) {
                    [arr[i], arr[m]] = [arr[m], arr[i]]
                    m++
                }
            }
            [arr[m], arr[e]] = [arr[e], arr[m]]

            divide(s, m - 1)
            divide(m + 1, e)
        }

        divide(0, arr.length - 1)
        return arr
    }
}

// Binary Heap

var findKthLargest = function(nums, k) {
    
    const getChild = (parentIndex) => {
        const leftChild = 2 * parentIndex + 1
        const rightChild = 2 * parentIndex + 2

        if (leftChild >= nums.length) {
            return leftChild
        }
        if (rightChild >= nums.length) {
            return leftChild
        }
        if (nums[rightChild] > nums[leftChild]) {
            return rightChild
        }
        return leftChild
    }


    const bubbleDown = (parentIndex) => {
        let childIndex = getChild(parentIndex)

        while (childIndex < nums.length && nums[childIndex] > nums[parentIndex]) {
            [nums[childIndex], nums[parentIndex]] = [nums[parentIndex], nums[childIndex]]
            parentIndex = childIndex
            childIndex = getChild(parentIndex)
        }
    }

    const peak = () => {
        [nums[0], nums[nums.length - 1]] = [nums[nums.length - 1], nums[0]]
        const max = nums.pop()
        bubbleDown(0)
        return max
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        bubbleDown(i)
    }

    let kthLargest = 0

    while (k > 0) {
        kthLargest = peak()
        k--
    }

    return kthLargest
}

const nums = [3,2,1,5,6,4] 
const k = 2

console.log(findKthLargest(nums, k))