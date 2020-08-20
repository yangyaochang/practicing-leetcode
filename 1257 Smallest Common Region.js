/*
題目好像沒有說，但是 regions[0][0] 是 root
*/

var findSmallestRegion = function(regions, region1, region2) {
    const NaryTree = {}

    for (let i = 0; i < regions.length; i++) {
        NaryTree[regions[i][0]] = []
        for (let j = 1; j < regions[i].length; j++) {
            NaryTree[regions[i][0]].push(regions[i][j])
        }
    }

    let LCA

    const dfs = (cur) => {
        if (cur in NaryTree === false) {return cur === region1 || cur === region2}

        const neighbors = NaryTree[cur]
        let numOfTrue = 0
        for (let i = 0; i < neighbors.length; i++) {
            if (dfs(neighbors[i])) {numOfTrue++}
        }
        if (numOfTrue === 2 || ((numOfTrue === 1) && (cur === region1 || cur === region2))) {
            LCA = cur
            return
        } 
        return (numOfTrue > 0) || (cur === region1 || cur === region2)
    }
    dfs(regions[0][0])
    return LCA
};

const regions = [["Earth","North America","South America"],
                ["North America","United States","Canada"],
                ["United States","New York","Boston"],
                ["Canada","Ontario","Quebec"],
                ["South America","Brazil"]]
const region1 = "Quebec"
const region2 = "New York"

console.log(findSmallestRegion(regions, region1, region2))