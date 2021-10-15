const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {return function (multiplier) {
    return num*multiplier;
    }
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = (multiplier) => createFareMultiplier(3)(multiplier);

const selectDifferentDrivers = (arrayOfDrivers, selection) => selection(arrayOfDrivers);