// Conditional Statements
let age = 17;
// if statements
if (age >= 18) {
  console.log("You are eligable to vote.");
}

// if-else statement
if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not eligible to vote.");
  }

// if-else else-if statement
let temperature = 25;
if (temperature < 0) {
  console.log("It is freezing.");
} else if (temperature >= 0 && temperature < 20) {
  console.log("It is cool outside.");
} else if (temperature >= 20 && temperature < 26) {
  console.log("It is warm outside.");
} else {
  console.log("It is hot outside.");
}
// switch statement
let day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("It is the start of the week.");
    break;
  case "Friday":
    console.log("It is the end of the week days.");
    break;
  default:
    console.log("It is a regular day.");
    break;
}