// Functions - reusable blocks of code

// Defining a function
function greet() {
    console.log("Welcome to functions!");
    console.log("Yahoo");
}

// Calling a function
greet();
greet();
greet();
greet();
greet();

// Define a function with parameters
function sum(num1, num2) {
    console.log("Calculating the value...");
    return num1 + num2;
}

// Calls w/ arguments
console.log(sum(5, 8));