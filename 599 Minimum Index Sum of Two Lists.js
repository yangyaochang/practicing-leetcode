var findRestaurant = function(list1, list2) {
    let cache = {}
    let commonIndexSum = {}

    for (let i = 0; i < list1.length; i++) {
        cache[list1[i]] = i
    }

    for (let i = 0 ; i < list2.length; i++) {
        if (list2[i] in cache) {
            let indexSum = i + cache[list2[i]]
            if (indexSum in commonIndexSum === false) {
                commonIndexSum[indexSum] = [list2[i]]
            } else {
                commonIndexSum[indexSum].push(list2[i])
            }
        }
    }

    let keys = Object.keys(commonIndexSum)

    return commonIndexSum[Math.min(...keys)]
};

const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
const list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
console.log(findRestaurant(list1, list2))