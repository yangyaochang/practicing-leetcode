var deleteNode = function(root, key) {
    let current = root
    let parent = null

    if (root.val === key) {
        if (root.left === null) {return root.right}
        if (root.right === null) {return root.left}

        temp = root.left 
        while (temp.right !== null) {
            temp = temp.right
        }
        temp.right = root.right
        return root.left
    }

    while (current !== null) {
        if (current.val > key) {
            parent = current
            current = current.left
        } else if (current.val < key) {
            parent = current
            current = current.right
        } else if (current.val === key) {
            if (current.left === null && current.right === null) {
                if (key < parent.val) {
                    parent.left = null
                } else {
                    parent.right = null
                }
                return root
            }

            if (current.left === null) {
                if (key < parent.val) {
                    parent.left = current.right
                } else {
                    parent.right = current.right
                }
                return root
            }

            if (key < parent.val) {
                parent.left  = current.left
            } else {
                parent.right  = current.left
            }
            
            if (current.right === null) {return root}

            let temp = current.left 
            while (temp.right !== null) {
                temp = temp.right
            }
            temp.right = current.right
            return root
        }
    }
    return root
};