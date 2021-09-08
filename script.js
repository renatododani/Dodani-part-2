//  Declared variables

let petName = prompt("Name your pet:");
let happiness = 0;
let energy = 0;

// For loop which prompts the user 6 times
for (let i = 0; i < 6; i++) {
    let answer = prompt("Feed,pet or walk?");

    if (answer === "Feed" || answer === "feed") {
        energy += 2;
    } else if (answer === "Pet" || answer === "pet") {
        happiness++;
    } else if (answer === "Walk" || answer === "walk") {
        if (energy === 0) {
            alert("Not enough energy to enjoy a walk.");    
        } else {
            happiness += 2;
            energy--;
        }
    } else {
        alert("Please type the correct word!");
    }
}

// Console name, energy and happiness level 
console.log('Pet name ', petName);
console.log('Happiness ', happiness);
console.log('Energy ', energy);
console.log(petName, ' has ', happiness, ' happiness and ', energy, ' energy.');