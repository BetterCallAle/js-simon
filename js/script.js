// Extract elements from DOM 
const heading = document.querySelector("h2");
const container = document.querySelector(".container")

// Start the game when click the button play
document.getElementById("play").addEventListener("click", function(){
    // clear the container and stop the timers
    container.innerHTML= ""
    // Create an Array with 5 random numbers and an array with user numbers
    const rndArray = getRndArray(1, 100, 5);
    console.log(rndArray);
    const userNumbersArray = []
    const rightNumber = []
    // stamp number in page
    stampRndNumbers(container, rndArray);

    // Create a timer with random array visible for 30 sec
    firstTimer = setTimeout(function(){
        container.innerHTML = ""
    }, 30000)

    //set another timer for the prompt asking the user to write the numbers
    secondTimer = setTimeout(()=>{
        //asking 5 time the numbers to the user
        for(let i = 0; i < 5; i++){
            userNumbersArray.push(parseInt(prompt("inserisci un numero")));
            console.log(userNumbersArray);
            const thisNumber = userNumbersArray[i];
            console.log(thisNumber);
            if(rndArray.includes(thisNumber)){
                rightNumber.push(thisNumber);
            }
            console.log(rightNumber);
        }

        //output
        container.innerHTML = stampTheOutput(rndArray, userNumbersArray, rightNumber)
    }, 31000)

})




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
    
    element.innerHTML = `<h2> ${arrayToString} </h2>`;
}

/**
 * Description: return a different output with user score and if they win or lose
 * @param {array} randomArray the random numbers from the cpu
 * @param {array} userNumbers the numbers written by users
 * @param {array} numberCompared the array compared with random and user numbers
 * @returns {string} the output text
 */
function stampTheOutput(randomArray, userNumbers, numberCompared){
    
    let outputText = `<h2>I numeri da ricordare erano: ${randomArray.join(" - ")}.</h2>
                      <h2>I numeri che hai scritto erano: ${userNumbers.join(" - ")}</h2>
                      <h2>I numeri che hai ricordato sono: ${numberCompared.join(" - ")}</h2>
                      <h2>Il tuo punteggio è ${numberCompared.length}</h2>`
    
    if(randomArray.length === numberCompared.length){
        outputText = `<h2>Complimenti, hai ricordato tutti i numeri. (${randomArray.join(" - ")}) </h2>`
    } else if (numberCompared.length === 0){
        outputText = `<h2>Assurdo! Non hai ricordato neanche un numero! (${randomArray.join(" - ")})</h2>`
    }

    return outputText
}