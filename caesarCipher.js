function caesarCipher(string, shiftFactor) {
    let encryptedWord = ''

    for (let i = 0; i < string.length; i++) {
        // Capital letters
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            // console.log('Capital Letters')
            if (string.charCodeAt(i) + shiftFactor > 90) {
                let remainder = 90 - string.charCodeAt(i)
                let shiftFromStart = shiftFactor - remainder - 1
                // console.log(shiftFromStart)
                // console.log(String.fromCharCode(65 + shiftFromStart))
                encryptedWord += String.fromCharCode(65 + shiftFromStart)
            }
            else {
                encryptedWord += String.fromCharCode(string.charCodeAt(i) + shiftFactor)
            }
        }
        // Small letters
        else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            if (string.charCodeAt(i) + shiftFactor > 122) {
                let remainder = 122 - string.charCodeAt(i)
                let shiftFromStart = shiftFactor - remainder - 1
                encryptedWord += String.fromCharCode(97 + shiftFromStart)
            }
            else {
                encryptedWord += String.fromCharCode(string.charCodeAt(i) + shiftFactor)
            }
        } 
        // Punctuation remains the same
        else {
            encryptedWord += string[i]
        }
    }

    return encryptedWord
}

console.log(caesarCipher('xyz', 3))

module.exports = caesarCipher