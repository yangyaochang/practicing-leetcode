/*
跟判斷一個 string 是不是一個回文一樣，但必須先把 linked list 裡面的值取出來
*/

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

// 第二次做

var isPalindrome = function(head) {
    let cur = head
    const list = []

    while (cur !== null) {
        list.push(cur.val)
        cur = cur.next
    }

    let left = 0
    let right = list.length - 1

    while (left < right) {
        if (list[left] !== list[right]) {return false}
        left++
        right--
    }
    return true
}