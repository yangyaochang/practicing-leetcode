var lowestCommonAncestor = function(root, p, q) {
    let lca

    const dfs = (current) => {
        if (current === null) {return false}

        let left = dfs(current.left)
        let right = dfs(current.right)
        let currentIsTarget = (current === p || current === q) ? true : false

        if ((left && right) || (left && currentIsTarget) || (right && currentIsTarget)) {
            lca = current
            return
        } else {return left || right || currentIsTarget}
    }

    dfs(root)
    return lca
};

