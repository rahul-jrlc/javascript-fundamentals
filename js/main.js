// ARRAY FILTER() METHOD - CREATES NEW ARRAY IF ITEM PASSES VALUE
// FILTER RETURNS TRUE OR FALSE - IF TRUE - THEN ELEMENT PASSED ONTO NEW ARRAY

let numbers = [23, 33, 42, 79, 76, 77, 55, 49, 2, 3, 5, 6];
let breakPoint = 30;

// IF NUMBER LESS THAN 30, PASS ONTO NEW ARRAY
let smallNumbers = numbers.filter((item, index, array) => {
    return item < 30; // CHECKS EVERY ITEM IN ARRAY AGAINST THIS CONDITION.
    // if true, element passed onto (returned) new array
});
console.log(smallNumbers);

// IF NUMBER GREATER THAN 30..
let bigNumbers = numbers.filter((item, index, array) => {
    return item > 30;
})
console.log(bigNumbers);

// IF NUMBER IS ODD
let odd = numbers.filter((item, index, array) => {
    return (item % 2) !== 0;
});
console.log(odd);


