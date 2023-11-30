const readline = require ('readline-sync');

const weightKg = 85;
const heightCm = 180;

const weight = readline.questionInt('“Whats your weight?”');
const height = readline.questionInt('"Whats your height?”');

const bmi = resultBMI(weight, height);

function resultBMI(weight, height) {
    console.log(`Weight: ${weight}, Height: ${height}`);

const heightInMeters = height / 100;
const heightSquared = heightInMeters ** 2;

const bmi = weight / heightSquared;

return bmi;
};

function main(){
    const bmi = resultBMI(weightKg, heightCm);
    console.log(`BMI: ${bmi.toFixed(2)}`)
}

main();