const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;
const routes = require('./routes/index.js');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// GET Route for homepage
app.get('/', (req, res) => {
    console.log('Home GET request been made');
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

// GET Route for notes page
app.get('/notes', (req, res) => {
    console.log('Notes GET request been made');
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/404.html'))
);


app.listen(PORT, () => {console.log(`Server is working @ http://localhost:${PORT}`)})