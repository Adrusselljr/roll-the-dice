const prompt = require("prompt-sync")()

const numOfSides = Number(prompt("Please enter how mny sides you want on the dice: "))

function pickSides(numOfSides) {

    let dice = numOfSides
    return Math.floor(Math.random() * dice) + 1
    
}
console.log(pickSides(numOfSides))