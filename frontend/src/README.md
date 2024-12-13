## H-Electro - E-Commerce Online Shop
## Übersicht
H-Electro ist eine vollständige E-Commerce-Plattform, die es Benutzern ermöglicht, durch verschiedene Produktkategorien zu stöbern, Produkte anzusehen und Informationen über sie abzurufen. Dieses Projekt wurde als Full-Stack-Anwendung entwickelt, mit React im Frontend und Node.js sowie MongoDB im Backend.

## Technologien
## Frontend:
React: Zum Aufbau der dynamischen Benutzeroberfläche.
Bootstrap: Für das Layout und die Stile der Seite.
CSS: Benutzerdefiniertes CSS für zusätzliche Styling-Anpassungen.
## Backend:
Node.js und Express.js: Zum Erstellen der RESTful API und für die Serverlogik.
MongoDB: Als NoSQL-Datenbank für die Speicherung von Produkt-, Benutzer- und Bestelldaten.
JWT (JSON Web Token): Zur Implementierung von Authentifizierung und Autorisierung.
## Features
Produktanzeige: Eine Liste von Produkten, die aus einer Datenbank abgerufen und auf der Website dargestellt werden.
Produktdetails: Benutzer können auf ein Produkt klicken, um weitere Details zu sehen.
Kategoriebasierte Filterung: Benutzer können Produkte nach Kategorien durchsuchen (Laptops, Smartphones, Hot Deals usw.).
CRUD-Operationen (Backend): Für Produktverwaltung, Benutzerregistrierung und Bestellungen.
JWT-basierte Authentifizierung: Sichere Benutzeranmeldung und -registrierung.
## Installation
Um das Projekt lokal zu starten, folge diesen einfachen Schritten:

Repository klonen:
git clone https://github.com/sammo3332/Online-Shop.git
Backend und Frontend installieren: Installiere die benötigten Abhängigkeiten im Backend und Frontend:


cd backend
npm install
cd frontend
npm install
Umgebungsvariablen anlegen: Erstelle im Backend-Ordner eine .env-Datei mit folgenden Angaben:

MONGO_URI=deine_mongodb_verbindung
JWT_SECRET=dein_geheimes_token
PORT=5000
Server starten:


cd backend
npm run dev
Das war es!
Jetzt sollte die Anwendung  unter http://localhost:3000 laufen.
