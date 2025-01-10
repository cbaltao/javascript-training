let ninjas = ['shaun', 'ryu', 'chun-li'];

console.log(ninjas[1]);

let random = ['abc', 30, 'd', 1.14];

console.log(random.length, random);

console.log(random.join('-'));

console.log(random.indexOf('abc'));

console.log(random.concat(ninjas));

// Adds value to the end of an array. Outputs the new length of the array.
console.log(ninjas.push('ken'));

// Removes the last item in an array. Outputs the removed item.
console.log(ninjas.pop());

// Comparison Operator
let name = 'shaun';

console.log(name > 'crystal');

// The comparison operator looks at the first letter
// of the word. s comes after c, therefore, s is greater than c.
// A lowercase letter is also greater than an uppercase letter.

let score = '100';

let newScore = Number(score);

console.log(typeof newScore);