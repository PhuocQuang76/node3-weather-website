const chalk = require('chalk');
const yargs = require('yargs');

const command = process.argv;

console.log(command);

const a = chalk.blue.bold("Success");
console.log(a + ' ' + process.argv[2] + process.argv[3]);

yargs.command({
    command: 'add',
    describe: 'Add a new node',

    builder: {
        title: {
            describe: 'Node title',
            demandOption:true,
            type:'string'

        }
    },

    handler: (argv) => {
        console.log('Title: ',argv.title)
    }
});


yargs.command({
    command: 'remove',
    describe: 'remove a node',
    handler: () => {
        console.log("remove a node!")
    }
});

yargs.command({
    command: 'list',
    describe: 'list a node',
    builder:{
        title: {
            describe:'list node',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: "Mode body",
            demandOption: false,
            type:'string'

        }


    },
    handler: (argv) => {
        console.log("Title: " + argv.title);
        console.log('body: ', argv.body)
    }
});

yargs.command({
    command: 'read',
    describe: 'read a node',
    handler: () => {
        console.log("Read a node")
    }
});

console.log(yargs.argv);