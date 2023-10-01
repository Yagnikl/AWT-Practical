const Calculator = require("./export");

const calculater = new Calculator();

const Add = calculater.add(50, 20);
console.log("50 + 20 =", Add);

const Subtract = calculater.subtract(50, 20);
console.log("50 - 20 =", Subtract);

const Multiply = calculater.multiply(50, 20);
console.log("50 * 20 =", Multiply);

const Divide = calculater.divide(50, 20);
console.log("50 / 20 =", Divide);
