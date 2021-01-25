var verifyPreorder = function(preorder) {
    const verify = (left, right) => {
        if (left >= right) {return true}

        const root = preorder[left]

        // 找到右子數
        let index = left
        while (preorder[index] <= root) {
            index++
        }

        // 檢查左子樹
        for (let i = left + 1; i < index; i++) {
            if (preorder[i] >= root) {return false}
        }

        // 檢查右子樹
        for (let i = index; i <= right; i++) {
            if (preorder[i] <= root) {return false}
        }

        return verify(left + 1, index - 1) && verify(index, right)
    }

    return verify(0, preorder.length - 1)
};