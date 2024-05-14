/* 
Example 3 - Function callback

  - Write a function each(array, callback) that takes as its first parameter array, and the second - 
  a function that will be applied to each element of the array. The each function must return a new array 
  whose elements will be the results of callback call.
*/
function each(array, callback) {
  const resultArray = [];
  for(let i = 0; i < array.length; i++) {
    resultArray.push(callback(array[i]));
  }
return resultArray;
}

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = each(numbers, (num) => num * num);
console.log(squaredNumbers);