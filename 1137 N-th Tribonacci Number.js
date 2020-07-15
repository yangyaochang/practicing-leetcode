var tribonacci = function(n) {
    let list = [0, 1, 1]
    
    for (let i = 3; i <= n; i++) {
        list[i] = list[i - 1] + list[i - 2] + list[i - 3]
    }
    
    return list[n]
};