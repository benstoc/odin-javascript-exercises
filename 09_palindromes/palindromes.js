const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
const palindromes = function (string) {
    string = string
                .toLowerCase()
                .split("")
                .filter(item => alphanumerical.includes(item))
                .join("");
                
    reverseString = string.split("").reverse().join("");
    return (string === reverseString)
};

// Do not edit below this line
module.exports = palindromes;
