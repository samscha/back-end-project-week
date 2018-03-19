const Note = require('./model');

module.exports = {
  create: note => {
    return new Note(note).save();
  },
  request: cb => {
    return Note.getAllNotes(cb);
  },
};
