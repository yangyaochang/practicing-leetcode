var getModifiedArray = function(length, updates) {
    const list = new Array(length)
    list.fill(0)

    updates.forEach(update => {
        for (let i = update[0]; i <= update[1]; i++) {
            list[i] += update[2]
        }
    })

    return list
};

const length = 5
const updates = [[1,3,2],[2,4,3],[0,2,-2]]

console.log(getModifiedArray(length, updates))