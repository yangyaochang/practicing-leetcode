/*
此題會用到的英文
進位數 carry number
餘數 remainder. get the remainder

Time Complexity: O(max(m, n)) => m, n are length of linked lists
Space Complexity: O(max(m, n))
*/

var addTwoNumbers = function(l1, l2) {
    let head = null
    let current = null
    let c1 = l1
    let c2 = l2
    let carry = 0
    
    while (c1 !== null || c2 !== null) {
        const c1Value = (c1) ? c1.val : 0
        const c2Value = (c2) ? c2.val : 0
        
        let value = c1Value + c2Value + carry
        carry = 0
        if (value > 9) {
            value = value % 10
            carry = 1
        }
        const newNode = new ListNode(value)
        
        if (!head) {
            head = newNode
            current = head
        } else {
            current.next = newNode
            current = current.next
        }
        
        if (c1) {c1 = c1.next}
        if (c2) {c2 = c2.next}  
    }
    
    if (carry === 1) {
        const newNode = new ListNode(1)
        current.next = newNode
        current = current.next
    }
    return head
};