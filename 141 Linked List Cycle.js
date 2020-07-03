var hasCycle = function(head) {
    let fast = head
    let slow = head

    while (slow !== null && fast !== null && head.next !== null) {
        fast = fast.next
        if (fast === null) {return false}
        else {fast = fast.next}
        slow = slow.next

        if (fast === slow) {return true}
    }
    return false
};