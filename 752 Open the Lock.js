var openLock = function(deadends, target) {
    const cache = new Set()
    const visited = new Set()

    deadends.forEach(deadend => {cache.add(deadend)})
    if (cache.has('0000')) {return -1}

    const queue = []
    queue.push(['0000', 0])
    visited.add('0000')

    while (queue.length > 0) {
        const [current, level] = queue.shift()

        if (current === target) {
            return level
        }

        for (let i = 0; i < current.length; i++) {
            let nums = current.split('').map(digit => Number(digit))
            if (nums[i] === 9) {
                nums[i] = 0
                if (cache.has(nums.join('')) === false && visited.has(nums.join('')) === false) {
                    queue.push([nums.join(''), level + 1])
                    visited.add(nums.join(''))
                }
                nums[i] = 8
                if (cache.has(nums.join('')) === false && visited.has(nums.join('')) === false) {
                    queue.push([nums.join(''), level + 1])
                    visited.add(nums.join(''))
                }
            } else if (nums[i] === 0) {
                nums[i] = 9
                if (cache.has(nums.join('')) === false && visited.has(nums.join('')) === false) {
                    queue.push([nums.join(''), level + 1])
                    visited.add(nums.join(''))
                }
                nums[i] = 1
                if (cache.has(nums.join('')) === false && visited.has(nums.join('')) === false) {
                    queue.push([nums.join(''), level + 1])
                    visited.add(nums.join(''))
                }
            } else {
                nums[i]++
                if (cache.has(nums.join('')) === false && visited.has(nums.join('')) === false) {
                    queue.push([nums.join(''), level + 1])
                    visited.add(nums.join(''))
                }
                nums[i] -= 2
                if (cache.has(nums.join('')) === false && visited.has(nums.join('')) === false) {
                    queue.push([nums.join(''), level + 1])
                    visited.add(nums.join(''))
                }
            }
        }   
    }

    return -1
};

const deadends = ["0201","0101","0102","1212","2002"]
const target = "0202"

console.log(openLock(deadends, target))