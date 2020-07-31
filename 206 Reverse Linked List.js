// Iteration solution
var reverseList = function(head) {
    let preNode = null
    let currentNode = head
    let nextNode 

    if (currentNode === null) {return null}
    while (currentNode !== null) {
        nextNode = currentNode.next
        currentNode.next = preNode

        preNode = currentNode
        currentNode = nextNode
        if (currentNode === null) {
            return preNode
        }
    }
};

// 第二次做 用的是在 24, 25 題使用到的通用解法 reverse 整個 linked list 就是 reverse a = head, b = null 的 linked list

var reverseList = function(head) {
    let preNode = null
    let current = head
    
    while (current !== null) {
        let temp = preNode
        preNode = current
        current = current.next
        preNode.next = temp
    }
    return preNode
};