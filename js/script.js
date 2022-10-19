// Extract h1 from DOM 
const heading = document.querySelector("h1")

// Create an Array with 5 random numbers
const rndArray = getRndArray(1, 100, 5)
console.log(rndArray);




//FUNCTIONS

/**
 * Description: generate a random number
 * @param {number} min min number
 * @param {number} max max number
 * @returns {number} random number
 */

function giveRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Description: generate an array with random numbers not duplicated
 * @param {number} min min number 
 * @param {number} max max number
 * @param {number} arrayLenght lenght of the array
 * @returns {Array} array with 
 */
function getRndArray(min, max, arrayLenght) {
    const arrayWithRandomNumber = []

    while (arrayWithRandomNumber.length < arrayLenght) {
        let randomNumber = giveRndNumber(min, max)

        if (!arrayWithRandomNumber.includes(randomNumber)) {
            arrayWithRandomNumber.push(randomNumber)
        }
    }

    return arrayWithRandomNumber
}