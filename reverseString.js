function reverseString(string) {
    let reverseString = '';

    for (let i = string.length - 1; i > -1; i--) {
        console.log(string[i])
        reverseString += string[i]
    }

    return reverseString
}

module.exports = reverseString