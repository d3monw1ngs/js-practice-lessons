/* 
Example 9 -Collection of courses (includes, indexOf, push, etc.)

Write 3 function declarations to work with the courses collection of training courses:

1. addCourse(newCourse) - adds a course to the end of the collection
2. removeCourse(name) - removes a course from the collection
3. updateCourse(oldName, newName) - changes the name to a new one

*/
let courses = ['HTML', 'Javascript', 'React.JS', 'Node.JS'];

function addCourse (newCourse) {
    courses.push(newCourse);
}

function removeCourse (name) {
    const index = courses.indexOf(name);
    if (index !== -1) {
        courses.splice(index, 1);
    }
}

function updateCourse(oldName, newName) {
    const index = courses.indexOf(oldName);
    if (index !== -1) {
        courses[index] = newName;
    }
}

addCourse("JavaScript Basics");
addCourse("Python Fundamentals");
console.log(courses); 

removeCourse("Python Fundamentals");
console.log(courses); 

updateCourse("JavaScript Basics", "Advanced JavaScript");
console.log(courses); 