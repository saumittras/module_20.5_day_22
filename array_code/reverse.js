//reverse [9,8,7,6,5,4,3,2,1]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//reverse an array by using arrayName.reverse() method
console.log(numbers1);
// const reversed = numbers1.reverse();
// console.log(reversed);

// //reverse an array by for loop
// let inde = 0;
// const rev_numbers = [];
// for (i = numbers.length - 1; i >= 0; i--) {
//   rev_numbers[inde] = numbers[i];
//   inde++;
// }
// console.log(rev_numbers);
const rev_numbers = [];
for (const num of numbers) {
  rev_numbers.unshift(num);
}
// console.log(rev_numbers);

//normal for loop
const reversed_numbers = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[1];
  reversed_numbers.unshift(num);
}
