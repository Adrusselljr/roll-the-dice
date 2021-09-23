const prompt = require("prompt-sync")()

const num = Number(prompt("Please enter how mny sides you want on the dice: "))

function pickSides(num) {
    let dice = num
    return Math.floor(Math.random() * dice) + 1
}
console.log(pickSides(num))