const repeatString = function(string, repeats) {
    if (repeats < 0) return 'ERROR';

    let repeatedString = '';
    for (i = 0; i < repeats; i++) {
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
