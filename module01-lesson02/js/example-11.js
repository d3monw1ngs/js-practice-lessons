/* 
Example 11 - The for loop

Write a for loop that prints numbers in ascending order to the browser console from min to max, but only if the number is a multiple of 5.

const max = 100;
const min = 20;
// Write for loop code here
*/
const max = 100;
const min = 20;
// Write for loop code here
for (let i = min; i <= max; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}