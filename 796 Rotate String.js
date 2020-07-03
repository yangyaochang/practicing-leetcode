var rotateString = function(A, B) {
    let pa = A.length
    let pb = 0

    while (pa >= 0 && pb < B.length) {
        if (A.slice(0, pa) !== B.slice(pb, B.length)) {
            pa--
            pb++
        } else if (A.slice(0, pa) === B.slice(pb, B.length)) {
            if (A.slice(pa, A.length) === B.slice(0, pb)) {
                return true
            } else {return false}
        }
    }
    return false
};

const A = 'abcde'
const B = 'cdeab'

console.log(rotateString(A, B))