// app.js file content
const sum = (num1,num2) => {
    return num1 + num2
}
console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollar) => {
return (dollar/oneEuroIs.USD)*oneEuroIs.JPY
}
const fromEuroToDollar = (euro) => {
    return euro*oneEuroIs.USD
}
const fromYenToPound = (yen) => {
    return (yen/oneEuroIs.JPY)*oneEuroIs.GBP
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
