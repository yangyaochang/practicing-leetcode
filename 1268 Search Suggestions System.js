var suggestedProducts = function(products, searchWord) {
    let output = []
    for (let i = 1; i <= searchWord.length; i++) {
        let target = searchWord.slice(0, i)
        let result = []

        for (let j = 0; j < products.length; j++) {
            if (products[j].slice(0, i) === target) {
                result.push(products[j])
            }
        }
        result.sort((a, b) => a.localeCompare(b))
        if (result.length > 3) {
            result.splice(3)
        }
        output.push(result)
    }
    console.log('mouse'.localeCompare('moneypot'))

    return output
};

const products = ["mobile","mouse","moneypot","monitor","mousepad"]
const searchWord = "mouse"

console.log(suggestedProducts(products, searchWord))