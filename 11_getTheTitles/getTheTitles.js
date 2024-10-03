const getTheTitles = function(bookArr) {
    //return bookArr.reduce((arr, book, index) => {
    //    arr[index] = book.title;
    //    return arr;
    //}, [])
    return bookArr.map(book => book.title)
};

// Do not edit below this line
module.exports = getTheTitles;
