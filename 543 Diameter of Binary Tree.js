const diameterOfBinaryTree = (root) => {
    // Bottom-up, postorder traversal
    let diameter = 0

    const traverse = (currentNode) => {
        let leftLevels = 0 
        let rightLevels = 0
        if (!currentNode.left && !currentNode.right) {
            return 1
        }
        if (currentNode.left) {
            leftLevels = traverse(currentNode.left)
        }
        if (currentNode.right) {
            rightLevels = traverse(currentNode.right)
        }
        let sum = leftLevels + rightLevels
        if (sum > diameter) {diameter = sum}
        return (leftLevels >= rightLevels) ? leftLevels + 1 : rightLevels + 1
    }
    
    if (!root) {
        return 0
    } else {
        traverse(root)
        return diameter
    }
};