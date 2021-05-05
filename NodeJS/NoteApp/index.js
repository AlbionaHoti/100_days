const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// add, remove, read, list notes

// Create add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    // builder's value is an object, and in this object we define all of the options
    // we want this command to support.
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note content',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

// List command

yargs.command({
  command: 'list',
  describe: 'List all notes!',
  handler: () => {
    notes.getNotes();
  },
});

// Read command

yargs.command({
  command: 'read',
  describe: 'Read a note!',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.findNote(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);
