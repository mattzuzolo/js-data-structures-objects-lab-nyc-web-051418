// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return newDriver = Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver);
    return (delete newObj[key]);
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    return (delete driver[key]);
}


//Why does deleteFromDriverByKey() pass non-destructive test when the other is desctructive?
// function deleteFromDriverByKey(driver, key, value) {
//     return (delete driver.key);
// }

// function destructivelyDeleteFromDriverByKey(driver, key) {
//     return (delete driver[key]);
// }
