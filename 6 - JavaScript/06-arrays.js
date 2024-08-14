// Arrays = store multiple values in a single variable

// Create an array
let fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"]
console.log(fruits);

// Access array elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);

// Length
console.log(fruits.length);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Modifying Array
fruits[1] = "Grapes"
console.log(fruits);

// Add another element (adds to the end)
fruits.push("Jackfruit");
console.log(fruits);

// Remove the last element
fruits.pop();
console.log(fruits);

// Traverse all the elements of an array in one go

// for loop
for (let i = 0; i < fruits.length; i++) {
    console.log("The current fruit is " + fruits[i] + ".");
}

// .forEach
fruits.forEach(function (fruit) {
    console.log("Fruit:", fruit);
})