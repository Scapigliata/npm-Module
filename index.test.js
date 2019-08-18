const greeter = require('./index.js');

console.log('Starting tests');

const resOne = greeter();
if (resOne !== 'Hello User!!!') {
  throw new Error('Greeter not working with default argument')
}

const resTwo = greeter('Paulina');
if (resTwo !== 'Hello Paulina!!!') {
  throw new Error('Greeter not working with name argument')
}