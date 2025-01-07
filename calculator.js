const calculator = {
    add(num1, num2) {
        return num1 + num2
    },
    subtract(num1, num2) {
        return num1 - num2
    },
    multiply(num1, num2) {
        return num1 * num2
    },
    divide(num1, num2) {
        return num1 / num2
    }
}

module.exports = calculator

// function calculator(num1, num2) {
//     return {
        // add() {
        //    return num1 * num2
        // },
        // subtract() {
        //     num1 - num2
        // },
        // multiply() {
        //     num1 * num2
        // },
        // divide() {
        //     num1 / num2
        // }
//     }
// }

// const numbers = calculator(2, 4)

// console.log(numbers.add())
// console.log(numbers.subtract())
// console.log(numbers.multiply())
// console.log(numbers.divide())