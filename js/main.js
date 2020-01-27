// OOP Concepts
// 1. Encapsulation
// Suppose we have a function to calculate monthly expenses on a daily base

const food = 25;
const transportation = 9;
const drinks = 3;
const rent = 40;
const otherExpenses = 10;

function calculateMonthlyExpenses(
  food,
  transportation,
  drinks,
  rent,
  otherExpenses
) {
  return (food + transportation + drinks + rent + otherExpenses) * 30;
}

console.log(
  calculateMonthlyExpenses(food, transportation, drinks, rent, otherExpenses)
);

// The above example is the procedural implementation which variables are on one side
// and functions are on one side so they are decupled, now let's look at the object
// oriented programming way and encapsulate it

const expenses = {
  food: 25,
  transportation: 9,
  rent: 40,
  drinks: 3,
  otherExpenses: 10,
  calculateMonthlyExpenses: function() {
    return (
      (this.food +
        this.transportation +
        this.drinks +
        this.rent +
        this.otherExpenses) *
      30
    );
  }
};

console.log(expenses.calculateMonthlyExpenses); 