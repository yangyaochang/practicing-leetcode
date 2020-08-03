/*
Time Complexity: O(n)
SPace Complexity: O(1)

從 141 題如何找 cycle 的基礎發展
推導兩個 pointers 第一次相遇時 fast 的距離是 slow 的距離的兩倍 => 2(l + a) = l + (a + b) + a
所以 l = b
相遇後 slow 從起點出發，與 fast 一次走一個下一個會面點即為解
*/

var detectCycle = function(head) {
    if (head === null || head.next === null) {return null}
    
    let fast = head
    let slow = head
    
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
        
        if (fast === slow) {
            slow = head
            while (slow !== fast) {
                fast = fast.next
                slow = slow.next
            }
            return fast
        }
    }
    // while loop 結束代表 fast 走到終點 linked list 沒有 cycle
    return null
};