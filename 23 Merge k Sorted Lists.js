/*
暴力法：走訪所有的值存到同一個 array
將 array 排序
依序建立一個新的 linked list

Time Complexity: O(nlogn) => 假設 sort 用的是 quick sort
Space Complexity: O(n)
*/

var mergeKLists = function(lists) {
    const nums = []
    let head = null
    
    for (let i = 0; i < lists.length; i++) {
        let current = lists[i]
        
        while (current !== null) {
            nums.push(current.val)
            current = current.next
        }
    }
    
    nums.sort((a, b) => a - b)
    
    const build = (index) => {
        if (index === nums.length) {return null}
        
        const node = new ListNode(nums[index])
        node.next = build(index + 1)
        return node
    }
    
    return build(0)
};

// 第二次做

var mergeKLists = function(lists) {
    let list = []

    for (let i = 0; i < lists.length; i++) {
        let current = lists[i]

        while (current !== null) {
            list.push(current.val)
            current = current.next
        }
    }

    const quicksort = (arr) => {
        const divide = (s, e) => {
            // 不要忘了 quicksort 的 base case
            if (s >= e) {return}
    
            let m = s
            for (let i = s; i < e; i++) {
                if (arr[i] < arr[e]) {
                    [arr[i], arr[m]] = [arr[m], arr[i]]
                    m++
                }
            }
            [arr[e], arr[m]] = [arr[m], arr[e]]
    
            divide(s, m - 1)
            divide(m + 1, e)
        }
    
        divide(0, arr.length - 1)
        return arr
    }

    list = quicksort(list)
    let newHead = null
    let pre = null

    for (let i = 0; i < list.length; i++) {
        if (i === 0) {
            newHead = new ListNode(list[i])
            pre = newHead
        } else {
            pre.next = new ListNode(list[i])
            pre = pre.next
        }
    }
    return newHead
};