function diceRoll() {

    let dice = [1, 2, 3, 4, 5, 6]
    return dice[Math.ceil(Math.random() * dice.length - 1)]
    
}
console.log(diceRoll())