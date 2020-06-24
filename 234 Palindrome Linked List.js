var isPalindrome = function(head) {
    let list = []
    let current = head

    while (current !== null) {
        list.push(current.val)
        current = current.next
    }

    let left = 0
    let right = list.length - 1

    while (left < right) {
        if (list[left] === list[right]) {
            left++
            right--
        } else {
            return false
        }
    }
    return true
};