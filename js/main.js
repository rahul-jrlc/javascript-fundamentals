// FUNCTIONS

//food prices
var beer = 70;
var burger = 100;
var popcorn = 300;

// user's money
var accountBalance = 1000;

// drink beer
function drinkBeer() {
    accountBalance = accountBalance - beer;
    console.log(accountBalance);
};

// eat burger
function eatBurger() {
    accountBalance = accountBalance - burger;
    console.log(accountBalance);
};

// eat popcorn
function eatPopcorn() {
    accountBalance = accountBalance - popcorn;
    console.log(accountBalance);
};

var mealList = [drinkBeer, drinkBeer, eatBurger, drinkBeer];

// FUNCTION PARAMETERS AND ARGUMENTS
function dayTrip(meals) {
    for (let i = 0; i < meals.length; i++) {
        meals[i]();
        // meals[i].call();
    }
}

dayTrip(mealList);