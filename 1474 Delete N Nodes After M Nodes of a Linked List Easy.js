/*
一開始把這題跟 #92 Reverse Linked List II 搞混了，可以一起複習比較
*/

var deleteNodes = function(head, m, n) {
    const remove = (h) => {
        if (h === null) {return null}
        let current = h
        let remain = 1


        while (remain < m) {
            current = current.next
            if (current === null) {return h}
            remain++
        }

        let cur = current.next
        let count = 1

        while (cur !== null && count < n) {
            cur = cur.next
            count++
        }

        if (cur === null) {current.next = null}
        else {current.next = remove(cur.next)}

        return h
    }

    return remove(head)
};