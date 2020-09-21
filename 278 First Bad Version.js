var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let mid
        let end = n
        let start = 1
        
        while (start < end) {
            mid = Math.floor((start + end) / 2)
            if (isBadVersion(mid)) {
                end = mid
            } else {start = mid + 1}
        }
        return start
    };
};

// 第二次做

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1
        let right = n

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            if (isBadVersion(mid) === false) {left = mid + 1}
            if (isBadVersion(mid) === true) {right = mid - 1}
        }

        return left
    };
};