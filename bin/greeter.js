#!/usr/bin/env node

const argv  = require('yargs').argv;
const greeter = require('../index');
console.log(greeter(typeof argv.name === 'string' ? argv.name : undefined));
