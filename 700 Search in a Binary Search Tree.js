/*
Iterative approach 
Time Complexity: O(H), where H is a tree height. 
That results in O(logn) in the average case, and O(n) in the worst case. => 這樣解釋 tree 在 balanced 與 unbalanced 的狀況比較詳細
Space Complexity: O(1)

*/

var searchBST = function(root, val) {
    let current = root
    
    while (current !== null) {
        if (val === current.val) {return current}
        else if (val > current.val) {current = current.right}
        else if (val < current.val) {current = current.left}
    }
    return null
};

/*
Recursive approach 
Time Complexity: O(H), where H is a tree height. 
That results in O(logn) in the average case, and O(n) in the worst case. => 這樣解釋 tree 在 balanced 與 unbalanced 的狀況比較詳細
Space Complexity: O(H), where H is a tree height. 
That results in O(logn) in the average case, and O(n) in the worst case.

Unbalanced tree 最差情況就是一個 linked list
*/

var searchBST = function(root, val) {
    const dfs = (current) => {
        if (current === null) {return null}
        if (current.val === val) {return current}
        
        if (val > current.val) {
            return dfs(current.right)
        } else if (val < current.val) {
            return dfs(current.left)
        }
    }
    
    return dfs(root)
};

// I don't understand why I used DFS last time

var searchBST = function(root, val) {
    let current = root

    while (current !== null) {
        if (current.val > val) {
            current = current.left
        } else if (current.val < val) {
            current = current.right
        } else if (current.val === val) {
            return current
        }
    }
    return null
};

var searchBST = function(root, val) {
    let current = root 

    while (current) {
        if (current.val > val) {
            current = current.left
        } else if (current.val < val) {
            current = current.right
        } else if (current.val === val) {
            return current
        }
    }
    return null
}
