// Looping and Conditionals

// Loops

for(let i = 0; i < 5; i++){
    console.log(i);
}

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// Do while, used if you need the code block to run at least once.

let i = 5;

do{
    console.log(i);
    i++;
} while (i<5); 

// Break and Continue ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const scores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        console.log('You lost, but lets keep going...');
        continue;
    }
    console.log(scores[i]);

    if(scores[i] === 5){
        console.log('You win');
        break;
    }
}

// Switch statements ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const grade = 'D';

// Switch case uses 'strict' equality
switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':

    case 'C':

    case 'D':

    case 'E':

    default:
        console.log('not a valid grade');
}