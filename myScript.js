const numbers = [45, 4, 9, 16, 25];

//=== Array.prototype.forEach()

/*function myFunction(value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
  console.log("---");
}

numbers.forEach(myFunction);*/

//=== Array.prototype.map()

/*function myFunction(value, index, array) {
  return value * 2;
}

const newNumbers = numbers.map(myFunction);
console.log(newNumbers);*/

//=== Array.prototype.filter()

/*function myFunction(value, index, array) {
  return value > 10;
}

const newNumbers = numbers.filter(myFunction);
console.log(newNumbers);*/

//=== Array.prototype.reduce()

/*function myFunction(total, value, index, array) {
  console.log(total);
  console.log("--");
  return total + value;
}

const newNumbers = numbers.reduce(myFunction);
console.log(newNumbers);*/

//=== Array.prototype.reduceRight()

/*let sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log("The sum is " + sum);*/

//=== Array.prototype.every()

/*function myFunction(value, index, array) {
  return value > 3;
}

const newNumbers = numbers.every(myFunction);

console.log(newNumbers);*/

//=== Array.prototype.some()

/*function myFunction(value, index, array) {
  return value > 18;
}

const newNumbers = numbers.some(myFunction);

console.log(newNumbers);*/

//=== Array.prototype.indexOf()

/*const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Orange") + 1;
console.log("Orange found in position " + position);*/

//=== Array.prototype.lastIndexOf()

/*const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1; 
console.log("Apple found in position " + position);*/

//=== Array.prototype.includes()

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango"));*/

//=== Array.prototype.find()

/*function myFunction(value, index, array) {
  return value > 18;
}

const newNumbers = numbers.find(myFunction);
console.log(newNumbers);*/
