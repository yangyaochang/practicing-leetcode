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

/*
第二次做
記得有三種可能
比 head 小
比 preNode 小
大於等於 preNode 則移動
*/

var insertionSortList = function(head) {
    if (head === null || head.next === null) {return head}
    
    let preNode = head
    let current = head.next
    let holding
    
    while (current !== null) {
        if (current.val < head.val) {
            holding = current
            current = current.next
            preNode.next = current
            holding.next = head
            head = holding
        } else if (current.val < preNode.val) {
            let pointer = head.next
            let prePointer = head
            
            while (pointer.val < current.val) {
                prePointer = pointer
                pointer = pointer.next
            }
            holding = current
            current = current.next
            preNode.next = current
            prePointer.next = holding
            holding.next = pointer
        } else {
            preNode = current
            current = current.next
        }
    }
    return head
};
