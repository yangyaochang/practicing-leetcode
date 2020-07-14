var canPlaceFlowers = function(flowerbed, n) {
    if (flowerbed.length === 1) {
        if (flowerbed[0] === 0 && n === 1) {return true}
        else if (n === 0) {return true}
        else {return false}
    }
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] !== undefined && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1
            n--
        } else if (i === flowerbed.length - 1 && flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
            flowerbed[i] = 1
            n--
        } else if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1
            n--
        }
    }
    return n <= 0
};