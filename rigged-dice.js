const prompt = require("prompt-sync")()

const numOfSides = Number(prompt("Please enter how mny sides you want on the dice: "))
const riggedNumber = Number(prompt("Please enter the number you want rigged: "))

 const roll = Math.floor(Math.random() * (numOfSides + 1))

if(roll === numOfSides + 1) {
    roll = riggedNumber
}

console.log(roll)