/* 
Example 3 - Area of a rectangle (Function Declaration)

Write a function getRectArea(dimensions) using Function Declaration to calculate the area of a rectangle with sides, the values of which will be passed to the dimensions parameter as a string. Values are guaranteed to be separated by a space.
*/

function getRectArea(dimensions) {
    const [length, width] = dimensions.split(" ").map(Number);
    return length * width;
}

console.log(getRectArea("8 11"));
