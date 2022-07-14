// STRING SPLIT AND ARRAY JOIN METHODS
// STRING TO ARRAY - str.split()
// ARRAY TO STRING - arr.join()

let sentence = "hello how are you fine thank you";

let words = sentence.split(" ");
console.log(words);

let chars = sentence.split("you");
console.log(chars);

let hyphen = words.join("-");
console.log(hyphen);