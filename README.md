## H-Electro - E-Commerce Online Shop
## Übersicht
H-Electro ist eine vollständige E-Commerce-Plattform, die es Benutzern ermöglicht, durch verschiedene Produktkategorien zu stöbern, Produkte anzusehen und Informationen über sie abzurufen. Dieses Projekt wurde als Full-Stack-Anwendung entwickelt, mit React im Frontend und Node.js sowie MongoDB im Backend.

## Technologien
## Frontend:
React: Zum Aufbau der dynamischen Benutzeroberflaeche.
Bootstrap: Fuer das Layout und die Stile der Seite.
CSS: Benutzerdefiniertes CSS fuer zusaetzliche Styling-Anpassungen.
## Backend:
Node.js und Express.js: Zum Erstellen der RESTful API und fuer die Serverlogik.
MongoDB: Als NoSQL-Datenbank fuer die Speicherung von Produkt-, Benutzer- und Bestelldaten.
JWT (JSON Web Token): Zur Implementierung von Authentifizierung und Autorisierung.
## Features
Produktanzeige: Eine Liste von Produkten, die aus einer Datenbank abgerufen und auf der Website dargestellt werden.
Produktdetails: Benutzer koennen auf ein Produkt klicken, um weitere Details zu sehen.
Kategoriebasierte Filterung: Benutzer koennen Produkte nach Kategorien durchsuchen (Laptops, Smartphones, Hot Deals usw.).
CRUD-Operationen (Backend): Fuer Produktverwaltung, Benutzerregistrierung und Bestellungen.
JWT-basierte Authentifizierung: Sichere Benutzeranmeldung und -registrierung.
## Installation
Um das Projekt lokal zu starten, folge diesen einfachen Schritten:

Repository klonen:
git clone https://github.com/sammo3332/Online-Shop.git
Backend und Frontend installieren: Installiere die benoetigten Abhaengigkeiten im Backend und Frontend:


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
