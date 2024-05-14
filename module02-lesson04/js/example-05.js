/* 
Example 5 - Contact logging (Function Declaration and Rest Operator)

Write a function printContactsInfo(names, phones) using Function Declaration that prints to the console 
the name and the user's phone number. 

The names and phones parameters will be passed strings of names and phone numbers separated by commas. 

Sequence number of names and phone numbers in the rows indicate a match. Number of names and phones 
guaranteed to be the same.

Print a message to the console in the format Name:<names>; Phone:<phones>;  Age<age>

*/
function printContactsInfo(names, phones, age) {
    const namesArray = names.split(',');
    const phonesArray = phones.split(',');
    for (let i = 0; i < namesArray.length; i++) {
        console.log(`Name: ${namesArray[i]}; Phone: ${phonesArray[i]}; Age: ${age}`);
    }
}

printContactsInfo("John,Doe,Emma", "123456789,987654321,456789123", 30);