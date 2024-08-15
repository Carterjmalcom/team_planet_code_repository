const prompt = require('prompt-sync')();

const gravityFactors = require('./utils/earthGravityFactors.js');

function showUserFactors(type, value) {
    let results = {}
    let measurment;
    for (let planet in gravityFactors) { 
        results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2))
    }
    switch (type) {
        case 'jump':
            measurment = "cm"
            break;
        
        case 'weight':
            measurment = "kg"
            break;

        default:
            break
    }
}
 
global.showUserFactors = showUserFactors