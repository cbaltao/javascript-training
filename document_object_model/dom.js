// Querying the dom

//can use "copy selector" on browser editor to target.
const para = document.querySelector('body > h1');

console.log(para);

// Select multiple elements 
const paras = document.querySelectorAll('p');

console.log(paras);

// Select by ID
const title = document.getElementById('page-title')

console.log(title);

//Select by class
const errors = document.getElementsByClassName('error');

console.log(errors[0]);

//Select by tag
const tagNames = document.getElementsByTagName('p');

console.log(tagNames[0]);

const pChange = document.querySelector('p');

// Modifying html
console.log(pChange.innerHTML);

pChange.innerHTML = 'This changed.';

paras.forEach(para =>{
    console.log(para.innerText);
    para.innerText += ' new Text';
})

const content = document.querySelector('.content');

content.innerHTML += '<h2>This is a new h2</h2>';

const people = ['mario', 'luigi', 'peach'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
})

const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'www.youtube.com');

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));

mssg.setAttribute('error', 'success');

// Adding or removing a new property.

mssg.style.margin = '50px';
mssg.style.margin = '';

// Adding classes
console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');

const paraTest = document.querySelectorAll('p');

paraTest.forEach(para => {
    if(para.textContent.includes('a')){
        para.classList.add('success');
    } else {
        para.classList.add('error');
    }

    //para.classList.toggle('test');
    // a toggle switches from firstly adding the test to the class list
    // and when called again, it removes it from the classlist.
})

//

