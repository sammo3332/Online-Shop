// Importiere Bootstrap für Styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Importiere die notwendigen React-Bibliotheken
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importiere benutzerdefinierte CSS-Datei für zusätzliche Stile
import './index.css';

// Importiere die Hauptkomponente der Anwendung
import App from './App';

// Importiere die Funktion für Web-Vitals (optional, für Performance-Analysen)
import reportWebVitals from './reportWebVitals';

// Initialisiere das Root-Element der React-Anwendung
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render die Anwendung in das Root-Element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Starte die Web-Vitals-Analyse (optional)
reportWebVitals();
