var removeDuplicates = function(S) {
    const remove = (arr, removed) => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                arr.splice(i, 2)
                i--
                removed = true
            }
        }
        if (!removed) {return arr}
        else {return remove(arr, false)}
    }

    return remove(S.split(''), false).join('')
};

const S = "abbaca"

console.log(removeDuplicates(S))