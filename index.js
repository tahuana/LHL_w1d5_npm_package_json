var chalk = require("chalk");

var message = chalk.blue("Hello ") + chalk.yellow("World");
console.log(message);

message = chalk.blue.bgRed.bold('Hello world!');
console.log(message);

message = chalk.blue('Hello', 'World!');
console.log(message);

message = chalk.red('Hello', chalk.underline.bgBlue('world') + '!');
console.log(message);

message = chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
);
console.log(message);
