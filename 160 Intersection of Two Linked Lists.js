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

// 第二次做

var getIntersectionNode = function(headA, headB) {
    let lengthA = 0
    let lengthB = 0
    let currentA = headA
    let currentB = headB

    while (currentA !== null) {
        lengthA++
        currentA = currentA.next
    }

    while (currentB !== null) {
        lengthB++
        currentB = currentB.next
    }

    let diff = Math.abs(lengthA - lengthB)

    let fast 
    let slow

    if (lengthA > lengthB) {
        fast = headA
        slow = headB
    } else {
        fast = headB
        slow = headA
    }

    while (diff > 0) {
        fast = fast.next
        diff--
    }

    while (fast !== null) {
        if (fast === slow) {return fast}
        fast = fast.next
        slow = slow.next
    }
    return null
}


