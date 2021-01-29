/*
用 for loop 來移動 cur, pre
*/

var reverseBetween = function(head, m, n) {
    let pre = null
    let cur = head
    
    for (let i = 1; i < m; i++) {
        pre = cur
        cur = cur.next
    }

    let tempTail_1 = pre
    let tempTail_2 = cur

    for (let i = m; i <= n; i++) {
        const temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }

    if (tempTail_1 === null) {
        head = pre
    } else {
        tempTail_1.next = pre
    }
    tempTail_2.next = cur

    return head
};