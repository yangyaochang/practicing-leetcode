var diameter = function(root) {
    let maxDiameter = 0

    const dfs = (current) => {
        if (current.children.length === 0) {return 1}

        const list = []
        for (let i = 0; i < current.children.length; i++) {
            list.push(dfs(current.children[i]))
        }
        list.sort((a, b) => b - a)

        if (list.length === 1) {
            maxDiameter = Math.max(list[0], maxDiameter)
            return list[0] + 1
        }

        const first = list[0]
        const second = list[1]

        maxDiameter = Math.max(first + second, maxDiameter)
        return first + 1
    }

    dfs(root)
    return maxDiameter
};