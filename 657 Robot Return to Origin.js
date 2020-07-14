var judgeCircle = function(moves) {
    let cache = {
        R: 0,
        L: 0,
        U: 0,
        D: 0
    }
    
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'R') {cache.R++}
        else if (moves[i] === 'L') {cache.L++}
        else if (moves[i] === 'U') {cache.U++}
        else if (moves[i] === 'D') {cache.D++}
    }
    
    if (cache.R === cache.L && cache.U === cache.D) {return true}
    return false
};