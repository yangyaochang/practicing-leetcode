var middleNode = function(head) {
    let length = 0
    let current = head

    while (current !== null) {
        length ++
        current = current.next
    }

    if (length === 1) {return head}
    // Handle edge case: [1]
    
    current = head
    let index = 0

    while (index < Math.floor(length / 2)) {
        current = current.next
        index++
        if (index === Math.floor(length / 2)) {return current}
    }
};

