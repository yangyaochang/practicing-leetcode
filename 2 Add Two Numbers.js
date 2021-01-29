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

/*
若其中一個 list 已走完，給他 0
const val1 = (p1 !== null) ? p1.val : 0
const val2 = (p2 !== null) ? p2.val : 0

記得 carry 加完要歸零
*/

var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let head = null
    let preNode = null
    let p1 = l1
    let p2 = l2

    while (p1 !== null || p2 !== null) {
        const val1 = (p1 !== null) ? p1.val : 0
        const val2 = (p2 !== null) ? p2.val : 0

        let num = val1 + val2 + carry
        carry = 0
        if (num >= 10) {
            num = num % 10
            carry = 1
        }

        const node = new ListNode(num)
        if (head === null) {head = node}
        else {preNode.next = node}
        preNode = node

        if (p1 !== null) {p1 = p1.next}
        if (p2 !== null) {p2 = p2.next}
    }

    if (carry > 0) {
        preNode.next = new ListNode(carry)
    }
    return head
}

// 用了本來的 Linked List 把 Space Complexity 降成 O(1)

var addTwoNumbers = function(l1, l2) {
    let c1 = l1
    let c2 = l2
    let preC2 = null
    let temp = 0

    while (c1 !== null || c2 !== null) {
        let num1 = c1 ? c1.val : 0
        let num2 = c2 ? c2.val : 0 
        let sum = num1 + num2 + temp
        
        if (c2 === null) {
            preC2.next = new ListNode(sum % 10)
            preC2 = preC2.next
            c1 = c1.next
        } else {
            c2.val = sum % 10
            preC2 = c2
            c2 = c2.next
            if (c1) {c1 = c1.next}
        }
        temp = Math.floor(sum / 10)
    }

    if (temp === 0) {return l2}
    preC2.next = new ListNode(temp)
    return l2
};