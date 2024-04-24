//Comparision Operators
//Compare 2 values
//Return true or false

//greater than
console.log("5 > 3:", 5 > 3); // true
console.log("3 > 5:", 3 > 5); // false

//less than
console.log("5 < 3:", 5 < 3); // false
console.log("3 < 5:", 3 < 5); // true

// Greater than or equal to '>='
console.log("5 >= 5", 5 >= 5); // true
console.log("5 >= 3:", 5 >= 3); // true
console.log("3 >= 5:", 3 >= 5); // false

// Less than or equal to '<='
console.log("5 <= 5", 5 <= 5); // true
console.log("5 <= 3:", 5 <= 3); // false
console.log("3 <= 5:", 3 <= 5); // true

// Equal to '==': Check the values
console.log("5 == 5:", 5 == 5); // true
// type coercion - (convert types if necessary)
console.log("5 == '5':", 5 == "5"); // true
console.log("'hello' == 'world':", "hello" == "world"); // false

// Not Equal to '!='
console.log("5 != 5:", 5 != 5); // false
console.log("5 != '5':", 5 != "5"); // false
console.log("'hello' != 'world':", "hello" != "world"); // true

// Strict Equal to '===': Check the values and data type.
console.log("5 === 5:", 5 === 5); // true
console.log("5 === '5':", 5 === "5"); // false
console.log("'hello' === 'world':", "hello" === "world"); // false

// Strict Not Equal to '!==': Check if values and data type are not equal.
console.log("5 !== 5:", 5 !== 5); // false
console.log("5 !== '5':", 5 !== "5"); // true
console.log("'hello' !== 'world':", "hello" !== "world"); // true