var deleteDuplicates = function(head) {
    if (head === null) {return head}
    
    let pre = null
    let start = head
    let end = start.next
    
    while (end !== null) {
        if (start.val === end.val) {
            while (start.val === end.val) {
                end = end.next
                if (end === null) {
                    if (pre !== null) {
                        pre.next = null
                        return head
                    }
                    else if (pre === null) {return null}
                }
            }
            
            if (start === head) {
                head = end
                start = end
                end = start.next
            } else {
                pre.next = end
                start = end
                end = start.next
            }
        } else if (start.val !== end.val) {
            pre = start
            start = end
            end = end.next
        }
    }
    return head
};