const reverseString = function(string) {
    let stringArray = string.split('')
    stringArray.reverse()
    return stringArray.join('')

}

const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g, "")

    if (reverseString(string) === string) return true

    return false
    
};

// palindromes('racecar!')
// palindromes('Racecar!')
// palindromes('A car, a man, a maraca.')
// palindromes('Animal loots foliated detail of stool lamina.')
palindromes('ZZZZ car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;
