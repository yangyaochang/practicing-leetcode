/*
1. Instantiate a scope variable called list[] to store cur.val
2. Implement DFS with recurssion
3. Instantiate a helper function called inorder() taking a variable called cur
4. Base case: if (cur === null) {return}
5. Recursive case: call inorder() with cur.left, push cur.val to list, call inorder() with cur.right
6. Call inorder() with the root node
7. Handle edge case: if (root === null)
8. return list[]

Time Complexity: O(n)
Space Complexity: O(n)
*/

var inorderTraversal = function(root) {
    const list = []

    const inorder = (cur) => {
        if (cur === null) {return}

        inorder(cur.left)
        list.push(cur.val)
        inorder(cur.right)
    }

    if (root === null) {return []}
    inorder(root)
    return list
}

// 第二次做

var inorderTraversal = function(root) {
    const result = [] 

    const dfs = (current) => {
        if (current === null) {return}

        dfs(current.left)
        result.push(current.val)
        dfs(current.right)
    }

    dfs(root)
    return result
}