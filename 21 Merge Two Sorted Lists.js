var mergeTwoLists = function(l1, l2) {
    // c means current node
    let l1_c = l1
    let l2_c = l2
    let head

    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1 !== null && l2 !== null) {
        head = (l1.val <= l2.val) ? l1 : l2

        let preNode = {}
        let holding
        while (l1_c !== null && l2_c !== null) {
            if (l1_c.val < l2_c.val) {
                holding  = l1_c
                l1_c = l1_c.next
            } else if (l1_c.val > l2_c.val) {
                holding  = l2_c
                l2_c = l2_c.next
            } else if (l1_c.val === l2_c.val) {
                holding = l1_c
                l1_c = l1_c.next
            }
            preNode.next = holding
            preNode = preNode.next
        }
        preNode.next = (l1_c === null) ? l2_c : l1_c
        return head
    }
};