/*
這題一開始看起來是求 permutation，但因為加上 0 <= i < j < k < n 的條件，變成不能往前選
就變成一個已 combination 方法求 permutations，且也不需要 used[] 來避免重複選取同一個元素
*/

var numTeams = function(rating) {
    let count = 0

    const formTeam = (members, start) => {
        if (members.length === 3) {
            if (isAscending(members) || isDescending(members)) {
                count++
            }
            return
        }

        for (let i = start; i < rating.length; i++) {
            members.push(rating[i])
            formTeam(members, i + 1)
            members.pop()
        }
    }

    formTeam([], 0)
    return count

    function isAscending(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] >= arr[i + 1]) {return false}
        }
        return true
    }
    function isDescending(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] <= arr[i + 1]) {return false}
        }
        return true
    }
};

const rating = [2,5,3,4,1]

console.log(numTeams(rating))