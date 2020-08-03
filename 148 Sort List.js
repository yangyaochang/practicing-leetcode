/*
在 linked list 上實現 merge sort
可以透過 fast (一次走兩步) 與 slow (一次走一步) 來找到 linked list 的中點
程式碼結構上與 array 的 merge sort 類似
*/

var sortList = function(head) {
    if (head === null) {return head}
    if (head.next === null) {return head}
    
    // 這個配置與 detect a cycle in linked list 不一樣
    let fast = head.next
    let slow = head
    
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }
    
    let head2 = slow.next
    slow.next = null
    
    return mergeTwoLists(sortList(head), sortList(head2))
};

function mergeTwoLists(l1, l2) {
    if (l1 === null) {return l2}
    if (l2 === null) {return l1}

    let head = (l1.val <= l2.val) ? l1 : l2
    let preNode = head
    let c1
    let c2

    if (head === l1) {
        c1 = l1.next
        c2 = l2
    } else {
        c2 = l2.next
        c1 = l1
    }

    while (c1 !== null && c2 !== null) {
        if (c1.val <= c2.val) {
            preNode.next = c1
            preNode = c1
            c1 = c1.next
        } else if (c1.val > c2.val) {
            preNode.next = c2
            preNode = c2
            c2 = c2.next
        }
    }

    if (c1 === null) {preNode.next = c2}
    else {preNode.next = c1}

    return head
};
