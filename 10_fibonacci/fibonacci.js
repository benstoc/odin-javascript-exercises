const fibonacci = function(n) {
    if (n < 0) return "OOPS";

    const fibArr = [0, 1];
    for (i = 1; i < n; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i]);
    }

    return fibArr[n];
};

// Do not edit below this line
module.exports = fibonacci;
