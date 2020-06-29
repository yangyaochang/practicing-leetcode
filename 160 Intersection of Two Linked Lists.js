var getIntersectionNode = function(headA, headB) {
    let lengthA = getLength(headA)
    let lengthB = getLength(headB)
    let difference = Math.abs(lengthA - lengthB)
    let currentA = headA
    let currentB = headB
    let count = 0
    
    if (lengthA > lengthB) {
        while (count < difference) {
            currentA = currentA.next
            count++
        }
    } else {
        while (count < difference) {
            currentB = currentB.next
            count++
        }
    }

    while (currentA && currentB) {
        if (currentA === currentB) {return currentA}
        currentA = currentA.next
        currentB = currentB.next
    }

    function getLength(head) {
        let current = head
        let length = 0

        while (current !== null) {
            length++
            current = current.next
        }
        return length
    }
};


