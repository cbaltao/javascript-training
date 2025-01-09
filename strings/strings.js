let email = 'cat@gmail.com';
console.log(email);

let firstName = "an1"
let lastName = "Keewatin"

let fullName = firstName + lastName;
console.log(fullName);

//Getting characters
console.log(fullName[0]);

//String length
console.log(fullName.length);

//String methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);

//Common string methods
let newEmail = 'car@academic.rrc.ca';

let newResult = newEmail.lastIndexOf('r');

console.log(newResult);


//Slice = (startpos, endpos)
newResult = newEmail.slice(0, 10)

console.log(newResult);

//Substring = (startpos, # of characters)
newResult = newEmail.substring(2, 9);

console.log(newResult);

//Template string
const title = "Title";
const author = "Me";
const likes = 10;

//Template using '`' a backtick.
let result3 = `The blog called ${title} by ${author} has ${likes}`;
console.log(result3);

let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes}</span>
`;

console.log(html);