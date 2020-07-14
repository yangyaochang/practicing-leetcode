var WordDistance = function(words) {
    this.words = words
    this.index1 = []
    this.index2 = []
    this.min = Infinity
};

WordDistance.prototype.shortest = function(word1, word2) {
    this.index1 = []
    this.index2 = []
    this.min = Infinity
    
    for (let i = 0; i < this.words.length; i++) {
        if (this.words[i] === word1) {this.index1.push(i)}
        else if (this.words[i] === word2) {this.index2.push(i)}
    }
    console.log(this.index1, this.index2)
    for (let i = 0; i < this.index1.length; i++) {
        for (let j = 0; j < this.index2.length; j++) {
            this.min = Math.min(Math.abs(this.index1[i] - this.index2[j]), this.min)
        }
    }
    return this.min
};