/*
先決定誰是最終的 head，並將 preNode 指向 head，設定好 c1, c2 的位置後 (當 head 的那個 list，currentNode 會往後一個)，透過比較 c1, c2 大小決定 preNode 指向誰
有點像逐步挑選下一個 node 已完成新的 merged list 
*/

var mergeTwoLists = function(l1, l2) {
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