// Arrays - can hold more than 1 value.
let fruits = ["Banana", "Apple", "Cherry", "Mango"];
console.log("Fruits:", fruits);
console.log("Element : ", fruits[0]);

//.slice() metho
//1st argument: starting index
//2nd argument: index of element that you won't include;
let slicedFruits = fruits.slice(1,3);
console.log("Sliced Fruits:", slicedFruits);

// Update an element
fruits[0] = "Avocado";
console.log("Fruits:", fruits);

// Adding an element
// .push() method - add element at the end of the array
fruits.push("Dewberries");
console.log("Fruits:", fruits);

// .splice() method - add an element at a specified index
// 1st Argument: starting index
// 2nd Argument: Delete Count
// 3rd Argument: Element/s you want to add
fruits.splice(1, 0, "Banana");
console.log("Fruits:", fruits);

// Delete an element
// .pop() method - delete element at the end of the array
fruits.pop();
console.log("Fruits:", fruits);

// .splice() method - add/delete an element at a specified index
// 1st Argument: starting index
// 2nd Argument: Delete Count
// 3rd Argument: Element/s you want to add
fruits.splice(1, 2);
console.log("Fruits:", fruits);

//Search for an element
console.log("Is there cherry?", fruits.includes("Cherry"));

//Search for index
console.log("Index of?", fruits.indexOf("Cherry"));

// Iterate over the elements of the array
fruits.forEach(function (fruit) {
    console.log("Fruit:", fruit);
  });