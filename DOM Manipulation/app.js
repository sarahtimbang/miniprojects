// .getElementById() selector
// Return: Element or null
let elementWithID = document.getElementById("first-div");
console.log("Element select by ID:", elementWithID);
elementWithID.textContent = "Div 1";

// .getElementsByClassName() selector
// Return: HTML Collection
let elementsWithClass = document.getElementsByClassName("sample-div");
console.log("Elements selected by Class:", elementsWithClass);

// Modify the .textContent property
elementsWithClass[1].textContent += " zzzz";

// for loop
// 1st Argument: Variable Declaration/Initialization
// 2nd Argument: Condition Expression
// 3rd Argument: Increment/ Decrement
for (let i = 0; i < elementsWithClass.length; i++) {
    let element = elementsWithClass[i];
    element.textContent += " is updated!";
  }
// getElementsByTagName() selector
// Return: HTML Collection
let listItems = document.getElementsByTagName("li");
console.log("List Items:", listItems);
  listItems[0].style.backgroundColor = "yellow";

  // for loop
// 1st Argument: Variable Declaration/Initialization
// 2nd Argument: Condition Expression
// 3rd Argument: Increment/ Decrement
for (let i = 0; i < listItems.length; i++) {
    let listItem = listItems[i];
    listItem.style.backgroundColor = "yellow";
  }

  // querySelector()
// Return: First Element or null
let orderedListItem = document.querySelector(".ordered-list");
console.log("Ordered List Item:", orderedListItem);
orderedListItem.style.backgroundColor = "green";

// querySelectorAll()
// Return: Node List
// Class name, tag name
let headings = document.querySelectorAll("h3");
console.log("Headings:", headings);

headings[0].style.backgroundColor = "aqua";

// for loop
// 1st Argument: Variable Declaration/Initialization
// 2nd Argument: Condition Expression
// 3rd Argument: Increment/ Decrement
for (let i = 0; i < headings.length; i++) {
    let heading = headings[i];
    heading.style.backgroundColor = "aqua";
  }

// Add event listeners
let button = document.getElementById("button");
button.addEventListener("click", function () {
  let buttonDiv = document.getElementById("button-div");
  alert("Button is clicked!");
  buttonDiv.textContent = "Hello World!";
});

// Appeding New Elements
let append = document.getElementById("append");
let newElement = document.createElement("div");
newElement.textContent = "Newly Appended Element";
append.appendChild(newElement);

// Deleting an element
let elementToBeRemoved = document.getElementById("remove");
elementToBeRemoved.remove();

// Updating Element Attributes
let image = document.getElementById("image");
image.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// Manipulating Element Styles
let style = document.getElementById("style");
style.style.backgroundColor = "black";
style.style.color = "white";
let mode = document.getElementById("mode");
mode.textContent = "Dark Mode";