/*
注意 fast pointer 一次要移動兩步的條件
*/

var sortedListToBST = function(head) {
    
    const build = (curHead) => {
        if (curHead === null) {return null}
        if (curHead.next === null) {return new TreeNode(curHead.val)}

        let slow = curHead
        let fast = curHead
        let preNode = null

        // fast 移動兩步的條件
        while (fast !== null && fast.next !== null) {
            fast = fast.next.next
            preNode = slow
            slow = slow.next
        }

        const node = new TreeNode(slow.val)
        preNode.next = null
        node.left = build(curHead)
        node.right = build(slow.next)

        return node
    }
    
    if (head === null) {return null}
    return build(head)
};