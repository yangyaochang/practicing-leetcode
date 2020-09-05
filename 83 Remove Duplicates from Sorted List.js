var deleteDuplicates = function(head) {
    if (head === null) {return head}
    
    let preNode = head
    let current = preNode.next
    
    while (current !== null) {
        if (current.val === preNode.val) {
            current = current.next
            preNode.next = current
        } else {
            preNode = current
            current = current.next
        }
    }
    
    return head
};