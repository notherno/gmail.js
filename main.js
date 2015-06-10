#!/usr/bin/env node
'use strict';

var IGNORE_DIR = './scripts-to-ignore';

// console.log('Hello Cmail!');
console.log(process.argv);
// console.log(process.env.HOME);

if (process.argv[2] === 'init') {
	var config = require(IGNORE_DIR + '/config.json');
	console.log(config);
}

