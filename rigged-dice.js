const prompt = require("prompt-sync")()

const numOfSides = Number(prompt("Please enter how mny sides you want on the dice: "))
const riggedNumber = Number(prompt("Please enter the number you want rigged: "))

function pickSides(numOfSides, riggedNumber) {

    let dice = numOfSides
    return Math.floor(Math.random() * dice) + 1

}
console.log(pickSides(numOfSides, riggedNumber))

// Not Finished!!!