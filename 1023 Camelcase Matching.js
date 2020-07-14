var camelMatch = function(queries, pattern) {
    let list = []

    for (let i = 0; i < queries.length; i++) {
        let p1 = 0
        let p2 = 0

        while (p1 < queries[i].length) {
            if (queries[i][p1] === queries[i][p1].toUpperCase() && queries[i][p1] !== pattern[p2]) {
                p2 = 0
                break
            }
            
            if (queries[i][p1] === pattern[p2]) {
                p1++
                p2++
            } else {
                p1++
            }
        }
        if (p2 === pattern.length) {list.push(true)}
        else {list.push(false)}
    }

    return list
};

const queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"]
const pattern = "FB"

console.log(camelMatch(queries, pattern))
