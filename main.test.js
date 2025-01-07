const capitalise = require('./capitalise')
const reverseString = require('./reverseString')
const calculator = require('./calculator')
const caesarCipher = require('./caesarCipher')
const analyseArray = require('./analyseArray')

test('Capitalise',() => {
    expect(capitalise('hello')).toBe('HELLO')
})

test('Reverse String', () => {
    expect(reverseString('hello')).toBe('olleh')
})

describe('Calculator', () => {
    test('31 + 42 = 53', () => {
        expect(calculator.add(31, 42)).toBe(73)
    })
    test('33 - 22 = 11', () => {
        expect(calculator.subtract(33, 22)).toBe(11)
    })
    test('31 * 42 = 1302', () => {
        expect(calculator.multiply(31, 42)).toBe(1302)
    })
    test('99 / 9 = 11', () => {
        expect(calculator.divide(99, 9)).toBe(11)
    })
})

describe('Caesar Cipher', () => {
    test('xyz to abc', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc')
    })
    test('Case preservation', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
    })
    test('Punctuation remains unchanged', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
    })
})

describe('Analysing numbers in array: [1,8,3,4,2,6]', () => {
    test('Average = 4', () => {
        expect(analyseArray([1,8,3,4,2,6]).average()).toBe(4)
    })
    test('Min = 1', () => {
        expect(analyseArray([1,8,3,4,2,6]).min()).toBe(1)
    })
    test('Average = 4', () => {
        expect(analyseArray([1,8,3,4,2,6]).max()).toBe(8)
    })
    test('Average = 4', () => {
        expect(analyseArray([1,8,3,4,2,6]).length()).toBe(6)
    })
})

// const orderTotal = require('./orderTotal')

// // The below JS test code can be rewritten in JEST
// // if (orderTotal({
// //     items: [
// //         { name: 'Dragoon cnady', price: 2, quantity: 3}
// //     ]
// // }) !== 6) {
// //     throw new Error('Check fail: Quantity')
// // }

// test('Quantity', () => {
//     expect(orderTotal({
//         items: [
//             { name: 'Dragoon cnady', price: 2, quantity: 3}
//         ]
//     })).toBe(6)
// })

// test('No quntity specified', () => 
//     expect(orderTotal({
//         items: [
//             { name: 'Dragoon cnady', price: 3}
//         ]
//     })).toBe(3)
// )

// test('Example 1', () =>
//     expect(orderTotal({
//         items: [
//             { name: 'Dragoon food', price: 8},
//             { name: 'Dragoon cage (S)', price: 800}
//         ]
//     })).toBe(808)
// )

// test('Example 2', () => 
//     expect(orderTotal({
//         items: [
//             { name: 'Dragoon collar', price: 20},
//             { name: 'Dragoon chew toy', price: 40}
//         ]
//     })).toBe(60)
// )

// if (orderTotal({
//     items: [
//         { name: 'Dragoon food', price: 8},
//         { name: 'Dragoon cage (S)', price: 800}
//     ]
// }) !== 808) {
//     throw new Error('Check fail: Happy path (Ex1)')
// }

// if (orderTotal({
//     items: [
//         { name: 'Dragoon collar', price: 20},
//         { name: 'Dragoon chew toy', price: 40}
//     ]
// }) !== 60) {
//     throw new Error('Check fail: Happy path (Ex2)')
// }

// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('adds 0 + 0 to equal 0', () => {
//     expect(sum(0, 0)).toBe(0);
// });

// test('two plus two is four', () => {
//   expect(2 + 2).toBe(4);
// });

// test('object assignment', () => {
//   const data = {one: 1};
//   data['two'] = 2;
//   expect(data).toEqual({one: 1, two: 2});
// });


// test('adding positive numbers is not zero', () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });

// test('null', () => {
//   const n = null;
//   expect(n).toBeNull();
//   expect(n).toBeDefined();
//   expect(n).not.toBeUndefined();
//   expect(n).not.toBeTruthy();
//   expect(n).toBeFalsy();
// });

// test('zero', () => {
//   const z = 0;
//   expect(z).not.toBeNull();
//   expect(z).toBeDefined();
//   expect(z).not.toBeUndefined();
//   expect(z).not.toBeTruthy();
//   expect(z).toBeFalsy();
// });

// test('two plus two', () => {
//   const value = 2 + 2;
//   expect(value).toBeGreaterThan(3);
//   expect(value).toBeGreaterThanOrEqual(3.5);
//   expect(value).toBeLessThan(5);
//   expect(value).toBeLessThanOrEqual(4.5);

//   // toBe and toEqual are equivalent for numbers
//   expect(value).toBe(4);
//   expect(value).toEqual(4);
// });


// test('there is no I in team', () => {
//   expect('team').not.toMatch(/I/);
// });

// test('but there is a "stop" in Christoph', () => {
//   expect('Christoph').toMatch(/stop/);
// });

// const shoppingList = [
//   'diapers',
//   'kleenex',
//   'trash bags',
//   'paper towels',
//   'milk',
// ];

// test('the shopping list has milk on it', () => {
//   expect(shoppingList).toContain('gas');
//   expect(new Set(shoppingList)).toContain('milk');
// });


// function compileAndroidCode() {
//   throw new Error('you are using the wrong JDK!');
// }

// test('compiling android goes as expected', () => {
//   expect(() => compileAndroidCode()).toThrow();
//   expect(() => compileAndroidCode()).toThrow(Error);

//   // You can also use a string that must be contained in the error message or a regexp
//   expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
//   expect(() => compileAndroidCode()).toThrow(/JDK/);

//   // Or you can match an exact error message using a regexp like below
//   // expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
//   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
// });