// Accessing Element using .getElementById() Selector
// Return: Element and Null
let elementWithID = document.getElementById("first-div");
console.log("Element accessed using ID:", elementWithID);


// Modify element .textContent property
elementWithID.textContent = "Div 1";


// Accessing Elements using the .getElementByClassName() Selector
// Return: HTML Collection
let elementsWithClass = document.getElementsByClassName("sample-div");
console.log('Elements with class "sample-div":', elementsWithClass);

// Modify element .textContent property using index
elementsWithClass[1].textContent = "Div 2";



// Access Elements using .getElementByTagName() Selector
// Return: HTML Collection
let listItems = document.getElementsByTagName("li");
console.log("List Items:", listItems);

// Modify element .backgroundColor property using index
listItems[0].style.color = "crimson";



// Access Element using .querySelector()
// Return: First Element or Null
let orderedListItem = document.querySelector(".ordered-list");
console.log("Ordered List Items:", orderedListItem);
orderedListItem.style.backgroundColor = "lightgreen";



// Access Elements using .querySelectorAll()
// Return: NodeList
let headings = document.querySelectorAll("h3");
console.log("Heading Tags:", headings);

// Modify element .backgroundColor property using index
headings[0].style.backgroundColor = "aqua";

// Modify element .backgroundColor property using for loop
for (let i = 0; i < headings.length; i++) {
  let heading = headings[i];
  heading.style.backgroundColor = "aqua";
}

// Note: Mention that you can also use for loop:
// 1. getElementsByClassName()
// 2. getElementsByTagName()



// Updating Element Attributes
let dayNightIcon = document.getElementById("day-night-icon");
dayNightIcon.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);



// Appending New Elements
let parentElement = document.getElementById("parent-element");
let createdElement = document.createElement("div");
createdElement.textContent = "Child Element";
parentElement.appendChild(createdElement);



// Removing an Element
let elementToBeRemoved = document.getElementById("element-to-be-removed");
elementToBeRemoved.remove();



// Adding Event Listeners and Manipulating Element Styles
let darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.addEventListener("click", function () {
    let pageContainer = document.getElementById("page-container");
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";
    let pageModeText = document.getElementById("page-mode-text");
    pageModeText.textContent = "Dark Mode";
});