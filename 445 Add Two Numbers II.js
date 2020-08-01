var addTwoNumbers = function(l1, l2) {
    const nums1 = traverse(l1)
    const nums2 = traverse(l2)
    let carry = 0
    let current = null
    let index = 0
    
    while (nums1[index] !== undefined || nums2[index] !== undefined) {
        const value1 = nums1[index] || 0
        const value2 = nums2[index] || 0
        
        let value = value1 + value2 + carry
        carry = 0
        
        if (value > 9) {
            value = value % 10
            carry = 1
        }
        
        const newNode = new ListNode(value, current)
        current = newNode
        index++
    }
    
    if (carry === 1) {
        const newNode = new ListNode(carry, current)
        current = newNode
    }
    
    return current
    
    function traverse(head) {
        const list = []
        
        const push = (current) => {
            if (current === null) {return}
            
            push(current.next)
            list.push(current.val)
        }
        
        push(head)
        return list
    }
};