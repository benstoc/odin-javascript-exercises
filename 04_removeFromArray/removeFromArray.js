const removeFromArray = function(array, ...items) {
    const newArray = [];
    for (item of array) {
        if (!items.includes(item)) {
            newArray.push(item);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
