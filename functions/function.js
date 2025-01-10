// Functions

function greet(){
    console.log('hello there!');
}

// Function Expression
const speak = function(){
    console.log('good day!')
};

speak();

// function speak(name = 'luigi', time = 'night'){
//     console.log(`${name} at ${time}`);


// }

// Arrow Functions

const calcArea = (radius) => {
    return 3.14 * radius**2;
}

const calcAreaShort = radius => 3.14 * radius**2;

console.log(calcArea(10));

// callbacks & foreach

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(value =>{
    console.log(value);
});

// foreach

const people = ['mario', 'luigi', 'toad', 'peach'];

people.forEach(person => {
    console.log(person);
})

// EXAMPLE

const ul = document.querySelector('.people');

let html = ` `;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

