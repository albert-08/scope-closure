const moneyBox = (coins) => {
    var saveCoins = 0
    saveCoins += coins
    console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5)
moneyBox(10)

const closureMoneyBox = () => {
    var saveCoins = 0
    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins
}

let myClosureMoneyBox = closureMoneyBox()

myClosureMoneyBox(4)
myClosureMoneyBox(6)
myClosureMoneyBox(10)