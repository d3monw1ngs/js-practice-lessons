/* 
Example 10 - The % Operator and String Methods

Write a script that will convert the value of totalMinutes (number of minutes) to string in hour and minute format HH:MM.

70 will show 01:10
450 will show 07:30
1441 will show 24:01

const totalMinutes = 70;
const hours = ;
const minutes = ;
console.log(hours);
console.log(minutes);

const doubleDigitHours = ;
const doubleDigitMinutes = ;
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`); 
*/


const totalMinutes = 70;
const hours = Math.floor(totalMinutes/60);
const minutes = totalMinutes % 60 ;
console.log(hours);
console.log(minutes);

const doubleDigitHours = hours < 10 ? `0${hours}` : hours;
const doubleDigitMinutes = minutes < 10 ? `0${minutes}` : minutes;
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);