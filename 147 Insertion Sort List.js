var insertionSortList = function(head) {
    if (head === null) {return null}
    
    let current = head.next
    let pre = head
    
    while (current !== null) {
        if (current.val < head.val) {
            let temp = current
            current = current.next
            pre.next = current
            temp.next = head
            head = temp
        } else if (current.val < pre.val) {
            let m = head.next
            let prem = head
            let temp = current
            
            current = current.next
            pre.next = current
            
            while(m.val < temp.val) {
                prem = m
                m = m.next
            }
            
            prem.next = temp
            temp.next = m
            
        } else {
            pre = current
            current = current.next
        }
    }
    return head
};