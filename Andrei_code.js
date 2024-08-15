const prompt = require('prompt-sync')();
// require gravityFactors from "./gravityFactors.js"
const gravityFactors = require('./gravityFactors.js');
// create a function called calculateWeightOnPlanets

// pass an argument of earthWeight
function calculateWeight(earthWeight) {
    // inside the function initialize an empty object
    const planetWeights = {};
    // the object is called planetWeights
    // iterate over gravityFactors
    for (let planet in gravityFactors) {

        // assign a key, value pair to planetWeights for each iteration
        planetWeights[planet] = parseFloat((earthWeight * gravityFactors[planet]).toFixed(2));
        // planetWeights[planet] = Math.round((earthWeight * gravityFactors[planet]) * 100) / 100;
        // the value of each key should be earthWeight times the value of the current
        // iteration of gravityFactors
        // Make sure the values are floats to two decimals
    }
    // return the planetWeights object from the function
    // console.log(planetWeights);
}
function getUserWeight() {
    console.log("Enter your weight in kg");
    const userWeight = prompt(">");
    console.log("Your weight is:", userWeight);
    // create a method to take the user weight
    planetWeights = {}
    for (let planet in gravityFactors) {
        planetWeights[planet] = parseFloat((userWeight * gravityFactors[planet]).toFixed(2));
        console.log(`Your weight on ${planet} is: ${planetWeights[planet]}kg`);
    }

}
global.getUserWeight = getUserWeight;
global.calculateWeight = calculateWeight;
// console.log("Your weight on other planets is:");
// console.log(calculateWeight(100));
// console log the planetWeights assume the function
// is passed in an earthWeight of 100(kg)

// make a comment at the bottom of the script
// telling a user how to run the script from node
// run in the terminal `node calculateWeight.js`
