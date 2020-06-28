var minAvailableDuration = function(slots1, slots2, duration) {
    let slots = slots1.concat(slots2)
    slots = quicksort(slots)

    for (let i = 1; i < slots.length; i++) {
        let overlap
        if (slots[i][1] <= slots[i - 1][1]) {
            overlap = slots[i][1] - slots[i][0]
        } else if (slots[i][0] < slots[i - 1][1]) {
            overlap = slots[i - 1][1] - slots[i][0]
        }
        if (overlap >= duration) {return [slots[i][0], slots[i][0] + duration]}
    }

    return []

    function quicksort(arr) {
        const divide = (s, e) => {
            if (s >= e) {return}
            let m = s
            for (let i = s; i < e; i++) {
                if (arr[i][0] < arr[e][0]) {
                    [arr[i], arr[m]] = [arr[m], arr[i]]
                    m++
                } else if (arr[i][0] === arr[e][0] && arr[i][1] < arr[e][1]) {
                    [arr[i], arr[m]] = [arr[m], arr[i]]
                    m++
                }
            }
            [arr[m], arr[e]] = [arr[e], arr[m]]
            divide(s, m - 1)
            divide(m + 1, e)
        }
        divide(0, arr.length - 1)
        return arr
    }
};

const slots1 = [[10,50],[60,120],[140,210]]
const slots2 = [[0,15],[60,70]]
const duration = 8

console.log(minAvailableDuration(slots1, slots2, duration))