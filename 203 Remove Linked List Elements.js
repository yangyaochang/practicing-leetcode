var removeElements = function(head, val) {
    let currentNode = head
    let preNode = null

    while (currentNode !== null) {
        if (currentNode.val === val) {
            if (preNode === null) {
                // current node is head
                head = head.next
                currentNode = head
            } else {
                // current node is not head
                preNode.next = currentNode.next
                currentNode = currentNode.next
            }
        } else {
            preNode = currentNode
            currentNode = currentNode.next
        }
    }

    return head
};