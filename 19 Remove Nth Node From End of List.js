/*
先建立 fast 和 slow 之間的差距，就可以用一個 loop 找到要刪的 node，如果要刪的 node 是 head 需要特別處理這個 edge case
由於題目保證 n 一定 valid，所以可以確定 fast 為 null 的情況下是要刪除 head
*/

var removeNthFromEnd = function(head, n) {
    let count = 1
    let fast = head
    let slow = head
    
    while (count <= n + 1) {
        if (fast === null) {
            head = head.next
            return head
        }
        fast = fast.next
        count++
    }
   
    while (fast !== null) {
        fast = fast.next
        slow = slow.next
    }
    
    slow.next = slow.next.next
    
    return head
};