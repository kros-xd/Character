// Kris Lee 6/16/2026
"use strict";

alert("Welcome traveller... to Aerova, the floating sky city! I am Kris, your guide and I will help you create your hero.");
const charName = prompt("What is your name, traveller?", "Traveller") || "Wanderer";
const petName = prompt(`What kind of companion do you have ${charName}? (e.g. Cat, Wolf, Dragon, etc.)`, "companion") || "Cat";

const superPower = prompt(`Do you have any super powers, ${charName}? Like magic, super strength, or extreme luck?`, "Shadow Step") || "Super Unlucky";
const trainingYearsText = prompt(`How many years have you been training your skill, ${superPower}?`, 1) || 1;
const trainingYears = parseInt(trainingYearsText);
console.log(trainingYearsText, typeof trainingYearsText);
console.log(trainingYears, typeof trainingYears);
const powerLevel = trainingYears * 10;

const likesFighting = confirm(`Well... ${charName}, do you like fighting monsters?\nClick OK for YES\nCANCEL for NO.`);
console.log(likesFighting, typeof likesFighting);

alert(`Gathering magic for ${charName}... almost ready!`);
alert(`
    ================================================
    Name: ${charName}
    Pet: ${petName}
    Superpower: ${superPower}
    Power Level: ${powerLevel}
    Monster Fighter: ${likesFighting ? "Yes" : "No"}

    The Beginning:
    In the floating city, Aerova -- You ${charName}, are 
    destined to vanquish the darkness that has engulfed it. 
    With ${trainingYears} years of training ${superPower} and along with your 
    ${petName} companion, there is no doubt you will save Aerova!
    ================================================
    `);