const express = require('express');
const app = express();

// Importing modular routers /api/notes
const notesRoute = require('./notes');

app.use('/api/notes', notesRoute);

module.exports = app;