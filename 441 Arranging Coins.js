var arrangeCoins = function(n) {
    let sum = 0
    let row = 0
    
    while (sum <= n) {
        row++
        sum += row
    }
    
    return row - 1
};