// Conditionals - allows you to execute different blocks of code based on a condition

// if, else if, else statement
let temperature = 25;

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature < 20) {
    console.log("It's cool outside.");
} else {
    console.log("It's warm/hot outside.");
}

// switch case statement
let day = "Friday";
switch (day) {
    case "Monday":
        console.log("It is the start of the week.");
        break;
    case "Friday":
        console.log("It is the weekend!");
        break;
    default:
        console.log("It is a regular day.");
}

// Looping - repeat blocks of code until a condition is met.

// For (assignment, condition, increment)
for (let i = 1; i <= 3; i++) {
    console.log("i:", i);
}

// While (condition)
let count = 1
while (count <= 3) {
    console.log("Count:", count);
    count++;
}

// Do-while 
let username = "";
do {
    username = prompt("Enter your name.");
} while (username == "")

console.log("Username:", username);
