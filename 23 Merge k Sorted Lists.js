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