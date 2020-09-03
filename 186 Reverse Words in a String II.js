var reverseWords = function(s) {
    s = s.join('').split(' ').reverse()
    return s.join(' ').split('')
};

const s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]

console.log(reverseWords(s))