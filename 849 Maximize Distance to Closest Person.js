var maxDistToClosest = function(seats) {
    const full = new Set()
    const distances = new Array(seats.length).fill(0)

    seats.forEach((num, index) => {
        if (num === 1) {full.add(index)}
    })

    seats.forEach((num, index) => {
        if (num === 0) {
            let minDistance = Infinity
            for (let value of full.values()) {
                minDistance = Math.min(Math.abs(index - value), minDistance)
            }
            distances[index] = minDistance
        }
    })

    return Math.max(...distances)
};

const seats = [1,0,0,0,1,0,1]

console.log(maxDistToClosest(seats))