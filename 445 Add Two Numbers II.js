/*
Linked list 的順序與 Add Two Numbers 相反，先用 array (stack) 存起來
*/

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

var addTwoNumbers = function(l1, l2) {
    const num1 = []
    const num2 = []
    const num = []
    let cur1 = l1
    let cur2 = l2
    let carry = 0

    while (cur1 !== null) {
        num1.push(cur1.val)
        cur1 = cur1.next
    }

    while (cur2 !== null) {
        num2.push(cur2.val)
        cur2 = cur2.next
    }

    while (num1.length > 0 || num2.length > 0) {
        const val1 = (num1.length > 0) ? num1.pop() : 0
        const val2 = (num2.length > 0) ? num2.pop() : 0

        let val = val1 + val2 + carry
        carry = 0

        if (val >= 10) {
            val = val % 10
            carry = 1
        }

        num.push(val)
    }

    if (carry > 0) {num.push(carry)}

    const head = new ListNode(num.pop())
    let current = head

    while (num.length > 0) {
        current.next = new ListNode(num.pop())
        current = current.next
    }
    return head
}


