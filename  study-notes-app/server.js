// server.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Basic route for home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route to get study notes
app.get('/notes', (req, res) => {
  // Sample data
  const notes = [
    { title: 'Note 1', content: 'This is the content of note 1' },
    { title: 'Note 2', content: 'This is the content of note 2' },
  ];
  res.json(notes);
});

// Route to get model papers
app.get('/model-papers', (req, res) => {
  // Sample data
  const modelPapers = [
    { title: 'Model Paper 1', content: 'This is the content of model paper 1' },
    { title: 'Model Paper 2', content: 'This is the content of model paper 2' },
  ];
  res.json(modelPapers);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});