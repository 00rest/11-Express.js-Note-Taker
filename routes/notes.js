const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

// GET Route retrieving all the notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json')
  .then((data) => {
    res.json(JSON.parse(data));
  });
});

// POST Route to save new note
notes.post('/', (req, res) => {
  const { text, title } = req.body;
  const newNote = { id: uuidv4(), title, text };
  readAndAppend(newNote, './db/db.json');
  res.json('Note added successfully');
});


// DLETE Route to save new note
notes.delete('/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        const result = json.filter((tip) => tip.id !== noteId);
        writeToFile('./db/db.json', result);
        res.json(`Item ${noteId} has been deleted `);
    });
});


module.exports = notes;