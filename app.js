console.log();

// 3rd party modules
const _ = require('lodash');
const yargs = require('yargs');

// Self created modules
const notes = require('./notes.js');

const argv = yargs.command('add', 'Add new note', {
    title: {
        describe: 'Title of note',
        demand: true,
        alias: 't'
    },

    body: {
        describe: 'Body of note',
        demand: true,
        alias: 'b'
    }
})
.command('list', 'List out all the notes')
.command('remove', 'Remove a note based on the given title', {
    title: {
        describe: 'Title of note',
        demand: true,
        alias: 't'
    }
})
.command('read', 'Read the contents of a single note title', {
    title: {
        describe: 'Title of note',
        demand: true,
        alias: 't'
    }
})
.help()
.argv;

if (argv._[0] === "add") {

    notes.addNote(argv.title, argv.body);

} else if (argv._[0] === "list") {

    notes.getAll();

} else if (argv._[0] === "read") {

    notes.readNote(argv.title);

} else if (argv._[0] === "remove") {

    notes.removeNote(argv.title);

} else {

    process.emitWarning("Command not recognized", {
      code: 'UNKNOWN_COMMAND',
      detail: '\nPlease use only: \n add \n list \n read \n remove'
    });

}
