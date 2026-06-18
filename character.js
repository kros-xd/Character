// Kris Lee 6/16/2026
"use strict";

alert("Welcome traveller... to Aerova, the floating sky city! I am Kris, your guide and I will help you create your hero.");
const charName = prompt("What is your name, traveller?", "Traveller") || "Wanderer";
// Check for pets
let petNameTemp = "None";
let hasPet = confirm(`${charName}, do you have a companion?\n\nOK for YES\nCANCEL for NO.`);

if (hasPet) {
    petNameTemp = prompt(`What kind of companion do you have ${charName}? (e.g. Cat, Wolf, Dragon, etc.)`, "companion") || "Rock";
} else {
    alert("That's boring!");
}

const petName = petNameTemp;

// Check for any super powers
let powerTemp = "None";
let trainingTemp = 0;
let hasPowers = confirm(`Do you have any super powers, ${charName}? Like magic, super strength, or extreme luck?\n\nOK for YES\nCANCEL for NO.`);

if (hasPowers) {
    powerTemp = prompt("What is your power?", "being sleep deprived") || "None";
    trainingTemp = prompt(`How many years have you been training your skill, ${powerTemp}?`, 1) || 1;
} else {
    alert("oh, so you're useless. Okay...");
}

const superPower = powerTemp;
const trainingYearsText = trainingTemp;
const trainingYears = isNaN(parseInt(trainingYearsText)) ? 0 : parseInt(trainingYearsText);
const yearLabel = trainingYears === 1 ? "year" : "years";
console.log(trainingYearsText, typeof trainingYearsText);
console.log(trainingYears, typeof trainingYears);
const powerLevel = trainingYears * 10;

const likesFighting = confirm(`Well ${charName}, do you like fighting monsters?\n\nOK for YES\nCANCEL for NO.`);
console.log(likesFighting, typeof likesFighting);

// Change ending message based on if the user has powers.
let dialogueChoice = "";

if (superPower !== "None") {
    dialogueChoice = `With ${trainingYears} ${(yearLabel)} of training ${superPower}${petName !== "None" ? ` and along with your 
    ${petName} companion,` : `,`} there is no doubt you will save Aerova!`;
} else {
    dialogueChoice = `However, without any abilities ${petName !== "None" ? `and even with your ${petName}` : "or a companion"}, you can't save Aerova!`;
}

alert(`Gathering magic for ${charName}... almost ready!`);
alert(`
    ============================================
    Name: ${charName}
    Pet: ${petName}
    Superpower: ${superPower}
    Power Level: ${powerLevel}
    Monster Fighter: ${likesFighting ? "Yes" : "No"}

    The Beginning:
    In the floating city, Aerova -- You ${charName}, are 
    destined to vanquish the darkness that has engulfed it. 
    ${dialogueChoice}
    ============================================
    `);