/* 
Example 8 - Time Formatting (Function Declaration)
Write a function formatTime(minutes) using Function Declaration that will translate the value of minutes 
(number of minutes) to a string in hour and minute format HH:MM.

*/
function formatTime(minutes) {
    const hours = Math.floor(minutes/60);
    const remainingMinutes = minutes % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(remainingMinutes).padStart(2,'0');

    return `${formattedHours}:${formattedMinutes}`;
}

console.log(formatTime(240));