/*
先把 linked list 轉成一個 array 處理掉連續和為 0 的部分
再重新生成一個 linked list
*/

var removeZeroSumSublists = function(head) {
    const arr = []

    while (head !== null) {
        arr.push(head.val)
        head = head.next
    }

    for (let left = 0; left < arr.length; left++) {
        let sum = 0

        for (let right = left; right < arr.length; right++) {
            sum += arr[right]
            if (sum === 0) {
                arr.splice(left, right - left + 1)
                left = -1
                break
            }
        }
    }
    
    let newHead = null
    let preNode 

    for (let i = 0; i < arr.length ; i++) {
        if (i === 0) {
            newHead = new ListNode(arr[i])
            preNode = newHead
        } else {
            preNode.next = new ListNode(arr[i])
            preNode = preNode.next
        }
    }
    return newHead
};

const head = [1,2,3,-3,4]

console.log(removeZeroSumSublists(head))

