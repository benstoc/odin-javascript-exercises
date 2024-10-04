const findTheOldest1 = function(arr) {
    return arr.sort((a, b) => {
        if (!a.yearOfDeath || !b.yearOfDeath) {
            return a.yearOfBirth - b.yearOfBirth;
        };

        const aAge = a.yearOfDeath - a.yearOfBirth;
        const bAge = b.yearOfDeath - b.yearOfBirth;
        return bAge - aAge;
    })[0];
};

const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        if (!oldest.yearOfDeath) oldest.yearOfDeath = new Date().getFullYear();
        if (!current.yearOfDeath) current.yearOfDeath = new Date().getFullYear();

        const oldAge = oldest.yearOfDeath - oldest.yearOfBirth;
        const currAge = current.yearOfDeath - current.yearOfBirth;

        return oldAge < currAge ? current : oldest;
    })
}

// Do not edit below this line
module.exports = findTheOldest;
