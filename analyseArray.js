function analyseArray(array) {
    return {
        average: function() {
            let total = 0;
            for (let i = 0; i < array.length; i++) {
                total += array[i]
            }
            return total / array.length
        },
        min: function() {
            return Math.min(...array)
        },
        max: function() {
            return Math.max(...array)
        },
        length: function() {
            return array.length
        }
    }
}

module.exports = analyseArray

const object = analyseArray([1,8,3,4,2,6])

console.log(object.average())