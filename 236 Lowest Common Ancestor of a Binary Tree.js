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

var lowestCommonAncestor = function(root, p, q) {
    let lca = null
    if (root === null) {return lca}
    
    const dfs = (current) => {
        if (current === null) {return false}
        
        let left = dfs(current.left)
        let right = dfs(current.right)
        
        if (left && right) {
            lca = current
        }
        if ((current === p || current === q) && (left || right)) {
            lca = current
        }
        return current === p || current === q || left || right
    }
    
    dfs(root)
    return lca
};

var lowestCommonAncestor = function(root, p, q) {
    let LCA

    const dfs = (cur) => {
        if (cur === null) {return}

        let left = dfs(cur.left)
        let right = dfs(cur.right)
        
        if ((left === true && right === true) || ((left === true || right === true) && (cur === p || cur === q))) {
            LCA = cur
            return 
        }
        return (cur === p || cur === q) || left || right
    } 

    dfs(root)
    return LCA
};

var lowestCommonAncestor = function(root, p, q) {
    let lca = null

    const dfs = (cur) => {
        if (cur === null) {return false}
        
        let left = dfs(cur.left)
        let right = dfs(cur.right)
        let currentIsTarget = (cur === p || cur === q)

        if ((left && right) || (left && currentIsTarget) || (right && currentIsTarget)) {
            lca = cur
        }
        return left || right || currentIsTarget
    }

    dfs(root)
    return lca
}

var lowestCommonAncestor = function(root, p, q) {
    let lca = null

    const dfs = (cur) => {
        if (cur === null) {return false}

        let left = dfs(cur.left)
        let right = dfs(cur.right)

        if (left === true && right === true) {lca = cur}
        if ((left === true || right === true) && (cur === p || cur === q)) {lca = cur}

        return (cur === p || cur === q) || left || right
    }

    dfs(root)
    return lca
}

