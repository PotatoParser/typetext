const fs = require('fs');
if (!fs.existsSync('./build')) fs.mkdirSync('./build');
fs.copyFileSync('index.js', './build/typetext.js');
let version = process.argv[2];
if (version.includes('/')) version = version.substring(version.lastIndexOf('/') + 1);
fs.writeFileSync(
	'./build/typetext.js',
	`/*! typetext ${version} | (c) Wilson Nguyen | MIT License */\n${fs.readFileSync('index.js', 'utf8')}`
);
