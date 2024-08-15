const prompt = require('node-sync')();

const gravityFactors = require('./utils/earthGravityFactors.js');

function showUserFactors(type, value) {
    let results = {}
    let measurment;
    for (let planet in gravityFactors) { 
        results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2))
    }
    switch (type) {
        case 'jump':

        case 'weight':
        
    }
 }