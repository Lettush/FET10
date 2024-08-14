// Arithmetic Operators (+, -, *, /)
let num1 = 10;
let num2 = 5;

console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num1 / num2);

console.log("Exponent (**):", num1 ** num2); // 10^5
console.log("Remainder (%):", num1 % num2);

// String Operations/Concatenation
console.log("Hello" + " " + "World!");
let greeting = "Hi";
let myName = "Jared";
console.log(greeting + " " + myName + ".");

// Comparison Operators

// Equal to "==": Checks if two values are equal
console.log("Equal to (==):", 5 == 5);
console.log("Equal to (==):", 5 == 3);
console.log("Equal to (==):", 5 == "5");

// Strict equal to "===": Checks if two values are equal, and if they have the same type
console.log("Strict Equal to (===):", 5 === 5);
console.log("Strict Equal to (===):", 5 === 3);
console.log("Strict Equal to (===):", 5 === "5");

// Not equal to (!=), Strict Not equal to (!==)
console.log("Not equal to (!=):", 5 != 5);
console.log("Not equal to (!=):", 5 != 3);
console.log("Not equal to (!=):", 5 != "5");
console.log("Strict Not Equal to (!==):", 5 !== 5);
console.log("Strict Not Equal to (!==):", 5 !== 3);
console.log("Strict Not Equal to (!==):", 5 !== "5");

console.log("Greater Than (>):", 5 > 3);
console.log("Less Than (<):", 3 < 5);
console.log("Greater Than or Equal To (>=):", 5 >= 3);
console.log("Less Than or Equal To (<=):", 3 <= 5);

// Logical Operators
/* 
    && = AND
    || = OR
    ! = NOT
*/
let sunny = true;
let warm = false;

// AND = returns TRUE if both conditions are TRUE
console.log("Is it sunny AND warm?", sunny && warm);

// OR = returns TRUE if at least one condition is TRUE
console.log("Is it sunny OR warm?", sunny || warm);

// NOT = inverse of a boolean
console.log("NOT sunny?", !sunny);

// Assignment Operators (=, +=, -=, *=, /=)
let num3 = 10;
let num4 = 5;

// num3 = num3 + num4
num3 += num4;
console.log("num3:", num3); // 10 + 5 = 15

// num3 = num3 - num4
num3 -= num4;
console.log("num3:", num3); // 15 - 5 = 10

// num3 = num3 * num4
num3 *= num4;
console.log("num3:", num3); // 10 * 5 = 50

// num3 = num3 / num4
num3 /= num4;
console.log("num3:", num3); // 50 / 5 = 10
