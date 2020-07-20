/*
Time Complexity: O(nlogm) => eatBananas() 有一個 for loop，binary search 是 O(logm)
Space Complexity: O(n) => 要複製一次 [...piles]
*/

var minEatingSpeed = function(piles, H) {
    let maxNum = Math.max(...piles)
    let minNum = 1

    while (minNum <= maxNum) {
        let mid = Math.floor((maxNum + minNum) / 2)
        let hours = eatBananas(mid, [...piles])
        
        if (hours <= H) {
            maxNum = mid - 1
        } else if (hours > H) {
            minNum = mid + 1
        }
    }

    return minNum

    function eatBananas(num, piles) {
        let hours = 0

        for (let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / num)
            // Math.ceil() 無條件進位
        }

        return hours
    }
};

const piles = [30,11,23,4,20]
const H = 6

console.log(minEatingSpeed(piles, H))