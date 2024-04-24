/*
| A     | B     | NOT A | A AND B | A OR B |
|-------|-------|-------|---------|--------|
| true  | true  | false | true    | true   |
| true  | false | false | false   | true   |
| false | true  | true  | false   | true   |
| false | false | true  | false   | false  |
*/
let sunny =true;
let warm = false;

console.log("Is it sunny AND warm?", sunny && warm);
console.log("Is it sunny OR warm?", sunny || warm);
console.log("Is it sunny NOT?", !sunny);