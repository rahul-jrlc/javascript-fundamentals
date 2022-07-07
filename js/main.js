// NUMBERS
// LOOSELY TYPED = DON'T DECLARE TYPE IN JAVASCRIPT
// += , -=, /=, *=, ++, --. %
// MODULUS (%) RETURNS THE REMAINDER AFTER INTEGER DIVISION

let number = 40;
number += 5;
console.log(number)

number -= 10;
console.log(number);

number /= 5;
console.log(number);

number *= 5;
console.log(number);

const slices = 10;
const children = 4;
const amount = slices % children;
console.log(amount);

const random = 4 + 6 + 10 * 10; // PEMDAS FOLLOWED IN JAVASCRIPT
const random2 = (4 + 6 + 10) * 10;
console.log(random);
console.log(random2);