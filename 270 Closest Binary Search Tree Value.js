var closestValue = function(root, target) {
    let current = root
    let minDiff = Infinity
    let closest

    while (current !== null) {
        if (target === current.val) {return current.val}
        else if (target > current.val) {
            if (minDiff > Math.abs(target - current.val)) {
                minDiff = Math.abs(target - current.val)
                closest = current.val
            }
            current = current.right
        } else if (target < current.val) {
            if (minDiff > Math.abs(target - current.val)) {
                minDiff = Math.abs(target - current.val)
                closest = current.val
            }
            current = current.left
        }
    }
    return closest
};