// ==================================================
// 23-2 Who is the tallest? Find the max number in an array
// Duration: 14 min
// ==================================================

// Problem: Find the maximum number (tallest) from an array of numbers.

// Example: [5, 3, 8, 2, 7]
// Output: 8

// Solution:

const heights = [5, 3, 8, 2, 7];

const tallest = Math.max(...heights); // Spread syntax to pass elements as arguments

console.log("Tallest:", tallest); // Output: 8


// ==================================================
// 23-3 Use add and multiplication to calculate wood requirements
// Duration: 11 min
// ==================================================

// Problem: Calculate the total wood requirement by adding and multiplying
// the length, width, and height of each wood piece.

// Example: Length = 2, Width = 3, Height = 4
// Total wood = length * width * height (for one piece)
// Output: 24 (for 2 pieces)

// Solution:

function calculateWood(length, width, height, quantity) {
  const volume = length * width * height; // volume of one piece of wood
  return volume * quantity; // total wood required for the given quantity
}

const totalWood = calculateWood(2, 3, 4, 2);

console.log("Total Wood:", totalWood); // Output: 24


// ==================================================
// 23-4 Find the cheapest phone from an array of phone objects
// Duration: 14 min
// ==================================================

// Problem: Find the cheapest phone from an array of phone objects.

// Example: 
// phones = [
//   { name: "Phone A", price: 500 },
//   { name: "Phone B", price: 300 },
//   { name: "Phone C", price: 700 }
// ]
// Output: Phone B, Price: 300

// Solution:

const phones = [
  { name: "Phone A", price: 500 },
  { name: "Phone B", price: 300 },
  { name: "Phone C", price: 700 }
];

const cheapestPhone = phones.reduce((minPhone, currentPhone) => {
  return currentPhone.price < minPhone.price ? currentPhone : minPhone;
});

console.log(`Cheapest Phone: ${cheapestPhone.name}, Price: ${cheapestPhone.price}`);
// Output: Cheapest Phone: Phone B, Price: 300


// ==================================================
// 23-5 Calculate the total cost of the products in a shopping cart
// Duration: 14 min
// ==================================================

// Problem: Calculate the total cost of products in a shopping cart

// Example: 
// products = [
//   { name: "Product A", price: 100, quantity: 2 },
//   { name: "Product B", price: 200, quantity: 1 },
//   { name: "Product C", price: 50, quantity: 3 }
// ]
// Output: Total cost: 650

// Solution:

const products = [
  { name: "Product A", price: 100, quantity: 2 },
  { name: "Product B", price: 200, quantity: 1 },
  { name: "Product C", price: 50, quantity: 3 }
];

const totalCost = products.reduce((total, product) => {
  return total + (product.price * product.quantity);
}, 0);

console.log("Total cost:", totalCost); // Output: 650


// ==================================================
// 23-6 (advanced) Multi-layer discount price calculation
// Duration: 15 min
// ==================================================

// Problem: Apply multi-layer discounts to the price of a product.
// First apply 10% discount, then apply an additional 5% discount on the new price.

// Example:
// Original price: 100
// After first discount (10%): 90
// After second discount (5%): 85.5

// Solution:

function applyDiscount(price, discount) {
  return price - (price * discount);
}

let price = 100;
price = applyDiscount(price, 0.10); // First discount of 10%
price = applyDiscount(price, 0.05); // Second discount of 5%

console.log("Final price after discounts:", price); // Output: 85.5


// ==================================================
// 23-7 Simple calculator to call function inside a function
// Duration: 10 min
// ==================================================

// Problem: Create a simple calculator that calls a function inside another function
// to perform different operations (addition, subtraction, multiplication, division).

// Example:
// Addition: 2 + 3 = 5
// Multiplication: 4 * 5 = 20

// Solution:

function calculator(num1, num2, operation) {
  function add() { return num1 + num2; }
  function subtract() { return num1 - num2; }
  function multiply() { return num1 * num2; }
  function divide() { return num1 / num2; }

  switch (operation) {
    case "add":
      return add();
    case "subtract":
      return subtract();
    case "multiply":
      return multiply();
    case "divide":
      return divide();
    default:
      return "Invalid operation";
  }
}

console.log("Addition:", calculator(2, 3, "add")); // Output: 5
console.log("Multiplication:", calculator(4, 5, "multiply")); // Output: 20


// ==================================================
// 23-8 Handle unexpected function input parameter error
// Duration: 16 min
// ==================================================

// Problem: Handle unexpected input parameter errors in a function.
// Ensure that the input is valid (numbers in this case), and if not, return an error message.

// Example:
// Input: "hello" and 3, should return an error message.

function safeAdd(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Error: Both parameters must be numbers.";
  }
  return num1 + num2;
}

console.log(safeAdd(2, 3)); // Output: 5
console.log(safeAdd("hello", 3)); // Output: Error: Both parameters must be numbers.
