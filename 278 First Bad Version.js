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