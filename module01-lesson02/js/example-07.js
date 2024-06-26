/*
Example 7 - Link formatting (ternary operator)

Make code refactoring of the task number 6 code using ternary operator.

let link = 'https://somesite.com/about';
if (!link.endsWith('/') && link.includes('my-site')) {
  link += '/';
}
console.log(link);
*/
let link = 'https://somesite.com/about';
link = link.includes("my-site") && !link.endsWith("/") ? link + "/" : link;

console.log(link);