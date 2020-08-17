const fs = require("fs");
const util = require("util");
const { v5: uuidv5 } = require('uuid');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


class Notes {
  read() {
    return readFile("db/db.json", "utf8");
  }

  write(note) {
    return writeFile("db/db.json", JSON.stringify(note));
  }

  // first reads file, once it is read notes are acquired, variable parsedNotes 
  // is created, make an array out of parsed material, if error'd out, 
  // parsedNotes is set equal to an empty array
  // return parsedNotes because it gives us the notes that we need
  returnNotes() {
    return this.read().then((notes) => {
      let parsedNotes;

      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (error) {
        parsedNotes = [];
      }

      return parsedNotes;
    });
  }

  addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Title and/or text need a value");
    }

    const newNote = { title, text, id: uuidv5() };
    return this.returnNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }

  deleteNote(id) {
    return this.returnNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes));
  }
}

module.exports = new Notes();

