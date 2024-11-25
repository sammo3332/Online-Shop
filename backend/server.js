const express = require('express');
const app = express();
const path = require('path');

// Middleware, um JSON-Daten zu verarbeiten
app.use(express.json());

// Statische Dateien aus dem Frontend-Ordner servieren
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

// API-Routen
app.get('/api/products', (req, res) => {
  const products = [
    // Deine Produktdaten hier
  ];
  res.json(products);
});

// Für alle anderen Routen die index.html aus dem Frontend servieren
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
