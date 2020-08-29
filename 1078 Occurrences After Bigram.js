var findOcurrences = function(text, first, second) {
    const list = []
    
    text = text.split(' ')
    
    for (let i = 0; i < text.length - 2; i++) {
        if (text[i] === first && text[i + 1] === second) {
            list.push(text[i + 2])
        }
    }
    
    return list
};