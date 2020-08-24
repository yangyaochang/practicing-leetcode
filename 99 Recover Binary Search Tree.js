/*
inorder traversal 走訪完後排序 array
再依照 inorder 順序重新 insert 值
*/

var recoverTree = function(root) {
    const list = []

    const dfs = (cur) => {
        if (cur === null) {return}

        dfs(cur.left)
        list.push(cur.val)
        dfs(cur.right)
    }

    dfs(root)
    list.sort((a, b) => a - b)
    let index = 0

    const recover = (cur) => {
        if (cur === null) {return}

        recover(cur.left)
        cur.val = list[index]
        index++
        recover(cur.right)
    }

    recover(root)
    return root
};