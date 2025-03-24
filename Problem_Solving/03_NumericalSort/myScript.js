const roll_numbers = [3, 1, 4, 5, 9, 7, 6, 8, 2];

console.log(roll_numbers.sort(function (a, b) {
  return a - b;
}));

console.log(roll_numbers);