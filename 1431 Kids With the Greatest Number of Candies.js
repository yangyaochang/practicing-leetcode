var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies)

    return candies.map(candy => candy + extraCandies >= max)
};

const candies = [2,3,5,1,3]
const extraCandies = 3

console.log(kidsWithCandies(candies, extraCandies))