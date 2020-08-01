var swapPairs = function(head) {
    if (head === null) {return null}
    if (head.next === null) {return head}
    
    const stack = []
    let current = head
    let newHead = null
    let newCurrent = null
    
    while (current !== null) {
        stack.push(current)
        current = current.next
        
        if (stack.length === 2) {
            while (stack.length > 0) {
                if (newHead === null) {
                    newHead = stack.pop()
                    newCurrent = newHead
                } else {
                    newCurrent.next = stack.pop()
                    newCurrent = newCurrent.next
                }
            }
        }
    }
    
    while (stack.length > 0) {
        newCurrent.next = stack.shift()
        newCurrent = newCurrent.next
    }
    newCurrent.next = null
    
    return newHead
};

// 參考第 25 題比較通用的做法

var swapPairs = function(head) {
    if (head === null) {return null}
    if (head.next === null) {return head}
    
    let a = head
    let b = head.next.next
    
    const newHead = reverse(a, b)
    a.next = swapPairs(b)
    return newHead
    
    function reverse(a, b) {
        let preNode = null
        let current = a
        let temp
        
        while (current !== b) {
            temp = preNode
            preNode = current
            current = current.next
            preNode.next = temp
        }
        
        return preNode
    }
};