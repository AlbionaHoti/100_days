const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(chalk.bold.green('Note: ') + chalk.bold.blue(note.title));
  });
  // console.log('Your notes are ...' + notes.map((n) => n.title));
};

const addNote = (title, body) => {
  const notes = loadNotes();

  // const duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  // });

  // refactored

  debugger;
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);

    console.log(chalk.green.inverse('New note added.'));
  } else {
    console.log(chalk.red.inverse('Note title taken'));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (noteTitle) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => {
    return note.title !== noteTitle;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

const findNote = (noteTitle) => {
  const notes = loadNotes();

  const note = notes.find((n) => n.title === noteTitle);

  note
    ? console.log(
        'Your note is here. Title: ' +
          chalk.bold.blue(note.title) +
          ' Body: ' +
          chalk.bold(note.body)
      )
    : console.log(chalk.black.inverse('Note not found'));
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  findNote: findNote,
};
