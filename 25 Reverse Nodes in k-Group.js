/*
Reverse linked list 就等於 reverse 從 head 到 null 之間不包含 null 的 nodes，若把 null 換成 b，head 換成 a 表示
就可以轉變成 reverse a 到 b 之間不包含 b 的 nodes。
注意遞迴
*/

var reverseKGroup = function(head, k) {
    if (head === null) {return null}
    
    let a = head
    let b = head

    
    for (let i = 0; i < k; i++) {
        if (b === null) {return head}
        b = b.next
    }
    
    let newHead = reverse(a, b)
    a.next = reverseKGroup(b, k)
    return newHead
    
    function reverse(a, b) {
        let preNode = null
        let current = a
        
        while (current !== b) {
            let temp = preNode
            preNode = current
            current = current.next
            preNode.next = temp
        }
        return preNode
    }
};