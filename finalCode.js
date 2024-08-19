const prompt = require('prompt-sync')();

const gravityFactors = require('./utils/earthGravityFactors.js');
const alienGravityFactors = require('./utils/alienGravityFactors.js');

var typeInput
var systemInput
var valueInput
var planetsInput

function showUserFactors(type, system, value, planets) {
    let results = {}
    let measurment;
    if (planets == 1) {
        for (let planet in gravityFactors) {
            results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2))
        }
    } else {
        for (let planet in alienGravityFactors) {
            results[planet] = parseFloat((alienGravityFactors[planet] * value).toFixed(2))
        }
    }
    switch (type) {
        case 'jump':
            if (system == "metric") {
                measurment = "cm"
            } else {
                measurment = "in"
            }
            break;

        case 'weight':
            if (system == "metric") {
                measurment = "kg"
            } else {
                measurment = "lbs"
            }
            break;
        case 'pushups':
            measurment = " repetitions"
            break;

        default:
            break
    }
    for (let planet in results) {
        console.log(`Your ${type} on ${planet} is ${results[planet]}${measurment}.`)
    }

}

const words = ["jump", "weight", "pushups", "metric", "imperial"]
var typeBool = true

function getUserInput() {
    typeOuter: while (true) {
        typeInput = prompt("Enter Type (jump, weight, pushups >> ").trim().toLowerCase()
        for (var i = 0; i < words.length - 1; i++) {
            if (typeInput == words[i]) {
                break typeOuter
            }
        }
        console.log('Retry')
    }

    systemOuter: while (true) {
        if (typeInput === "pushups") {
            break
        }
        systemInput = prompt("Enter System (metric, imperial) >> ").trim().toLowerCase()
        for (var i = 0; i < words.length - 1; i++) {
            if (systemInput == words[i]) {
                break systemOuter
            }
        }
            console.log('Retry')
        

    }
    while (true) {
        valueInput = prompt("Enter Value (amount of unit) >> ")
        if (!isNaN(valueInput)) {
            break
        }
        else {
            console.log('Retry')
        }

    }
    planetsInput = prompt("Enter Solar System (1, 2) >> ")
    showUserFactors(typeInput, systemInput, valueInput, planetsInput)

}


global.showUserFactors = showUserFactors
global.getUserInput = getUserInput