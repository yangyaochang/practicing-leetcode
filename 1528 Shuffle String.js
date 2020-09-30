var restoreString = function(s, indices) {
    const list = new Array(s.length)

    for (let i = 0; i < s.length; i++) {
        list[indices[i]] = s[i]
    }

    return list.join('')
};

const s = "codeleet"
const indices = [4,5,6,7,0,2,1,3]

console.log(restoreString(s, indices))