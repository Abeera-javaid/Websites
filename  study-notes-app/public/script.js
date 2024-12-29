// public/script.js

document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display study notes
    fetch('/notes')
      .then(response => response.json())
      .then(notes => {
        const notesList = document.getElementById('notes-list');
        notes.forEach(note => {
          const listItem = document.createElement('li');
          listItem.textContent = `${note.title}: ${note.content}`;
          notesList.appendChild(listItem);
        });
      });
  
    // Fetch and display model papers
    fetch('/model-papers')
      .then(response => response.json())
      .then(modelPapers => {
        const modelPapersList = document.getElementById('model-papers-list');
        modelPapers.forEach(paper => {
          const listItem = document.createElement('li');
          listItem.textContent = `${paper.title}: ${paper.content}`;
          modelPapersList.appendChild(listItem);
        });
      });
  });