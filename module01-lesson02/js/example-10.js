/* 
Example 10 - Project submission deadline (switch)

Make the code refactor of the task number 9 code using switch.

const daysUntilDeadline = 5;

if (daysUntilDeadline === 0) {
  console.log('Today');
} else if (daysUntilDeadline === 1) {
  console.log('Tomorrow');
} else if (daysUntilDeadline === 2) {
  console.log('The day after tomorrow');
} else {
  console.log('Date in the future');
}
*/
const daysUntilDeadline = 2;
let message;
switch (daysUntilDeadline) {
  case 0:
    message = 'Today';
    break;
  case 1:
    message = 'Tomorrow';
    break;
  case 2:
    message = 'The day after tomorrow';
    break;
  default:
    message = 'Date in the future';
}
console.log(message);