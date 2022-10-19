// Extract h1 from DOM 
const heading = document.querySelector("h1");

// Create an Array with 5 random numbers and an array with user numbers
const rndArray = getRndArray(1, 100, 5);
console.log(rndArray);
const userNumbersArray = []
// stamp number in page
stampRndNumbers(heading, rndArray);

// Create a timer with random array visible for 30 sec
setTimeout(function(){
    heading.classList.add("hidden")
}, 1000)

//set another timer for the prompt asking the user to write the numbers
setTimeout(()=>{
    //asking 5 time the numbers to the user
    for(let i = 0; i < 5; i++){
        userNumbersArray.push(parseInt(prompt("inserisci un numero")))
    }
}, 1099)




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
    const arrayWithRandomNumber = [];

    while (arrayWithRandomNumber.length < arrayLenght) {
        let randomNumber = giveRndNumber(min, max);

        if (!arrayWithRandomNumber.includes(randomNumber)) {
            arrayWithRandomNumber.push(randomNumber);
        }
    }

    return arrayWithRandomNumber
}

// UI FUNCTIONS
/**
 * Description: stamp an array in a DOM element
 * @param {object} element an element from the DOM
 * @param {array} array an array with somethings to stamp
 */

function stampRndNumbers(element, array) {
    
    const arrayToString = array.join(" - ");
    
    element.innerHTML = arrayToString;
}