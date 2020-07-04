var balancedStringSplit = function(s) {
    let R = 0
    let L = 0
    let max = 0
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {R++}
        else {L++} 
        
        if (R === L) {
            max++
            R = 0
            L = 0
        }
    }
    return max
};