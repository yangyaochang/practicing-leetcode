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
