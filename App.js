import React, { useState } from 'react'; // React-Bibliothek und den Hook "useState" importieren
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';    // Router-Komponenten für Seitenwechsel importieren
import 'bootstrap/dist/css/bootstrap.min.css';   // Bootstrap CSS für das Styling der Anwendung
import './App.css'; // Benutzerdefinierte CSS-Datei für eigenes Styling

// Liste für alle Produkte, die auf der Startseite angezeigt werde
const allProducts = [
           { name: "iphone_16 pro max", price: 19.99, description: "Das ist ein Iphone.", image: "/images/iphone_16 pro max.jpg" },
  { name: "Camera 3", price: 1199.99, description: "Eine Kamera mit 4K-Video.", image: "/images/camera_3.jpg" },
     { name: "laptop 7", price: 1499.99, description: "Ein schneller Laptop.", image: "/images/laptop_7.jpg" },
  { name: "Iphone 15", price: 1500.99, description: ".schönes Handy", image: "/images/iphone_15.jpg" },
      { name: "iphone_13 pro max", price: 1119.99, description: "Ein iPhone  .", image: "/images/iphone_13 pro max.jpg" },
  { name: "Iphone 14", price: 1300.99, description: "unser reduziertes Iphone.", image: "/images/iphone_14.jpg" },
  { name: "iphone_15 pro max", price: 1129.99, description: "Ein iPhone15 .", image: "/images/iphone_14 pro max.jpg" }
];

   //die  Liste von Laptops
const laptopProducts = [
  { name: "laptop 7", price: 1499.99, description: "Ein leistungsstarker Laptop.", image: "/images/laptop_7.jpg" },
  { name: "Laptop 3", price: 799.99, description: "Ein kleiner und tragbarer Laptop.", image: "/images/laptop_3.jpg" },
  { name: "Laptop 4", price: 1099.99, description: "Laptop für Gaming.", image: "/images/laptop_4.jpg" },
  { name: "Laptop 5", price: 1299.99, description: "Ein Business-Laptop.", image: "/images/laptop_5.jpg" },
  { name: "Laptop 6", price: 699.99, description: "Ein günstiger Laptop.", image: "/images/laptop_6.jpg" }
];

//    Liste von Smartphones
const smartphoneProducts = [
  {  name: "iphone_16 pro max", price: 19.99, description: "Das ist ein Iphone.", image: "/images/iphone_16 pro max.jpg" },
  { name: "iphone_15 pro max", price: 1229.99, description: "Ein neues Smartphone.", image: "/images/iphone_14 pro max.jpg" },
  { name: "Iphone 15", price: 1500.99, description: "Ein iPhone15 .", image: "/images/iphone_15.jpg" },
  { name: "iphone_13 pro max", price: 1119.99, description: "iPhone 13 pro max.", image: "/images/iphone_13 pro max.jpg" },
  { name: "Iphone 14", price: 1300.99, description: "reduziertes iPhone 14 .", image: "/images/iphone_14.jpg" }
];
  //    Liste von Kameras
const cameraProducts = [
  { name: "Camera 3", price: 1199.99, description: "Eine hochwertige Kamera.", image: "/images/camera_3.jpg" },
  { name: "Camera 1", price: 899.99, description: "Eine gute Kamera für Bilder.", image: "/images/camera_1.jpg" },
  { name: "Camera 2", price: 499.99, description: "Eine kleine Kamera für unterwegs.", image: "/images/camera_2.jpg" }
];

  // Liste von Tablets
const tabletProducts = [
  { name: "Tablet 1", price: 499.99, description: "Ein leichtes und tragbares Tablet.", image: "/images/tablet_1.jpg" },
  { name: "Tablet 2", price: 599.99, description: "Ein gutes Tablet mit einem scharfen Display.", image: "/images/tablet_2.jpg" }
];

// Haupt-App-Komponente
const App = () => {
  const [category, setCategory] = useState('home');  // Zustand für die aktuelle Kategorie, standardmäßig "home"
  const [cart, setCart] = useState([]); // Zustand für den Warenkorb, der Produkte speichert
  const [showCart, setShowCart] = useState(false); // Zustand für die Sichtbarkeit des Warenkorbs

  // Funktion, um eine Produkt in den Warenkorb hinzuzufügen
  const addToCart = (product) => {
    setCart([...cart, product]); //  fuge  das ausgewählte Produkt dem Warenkorb hinzu
  };

       // Funktion, um   Produkte je nach Kategorie anzuzeigen
  const renderProducts = () => {
    let products;
    switch (category) {
      case 'laptops':
        products = laptopProducts; // Zeig1e Laptop-Produkte, wenn die Kategorie "laptops" ausgewählt ist
        break;
      case 'smartphones':
        products = smartphoneProducts; //  Zeige Smartphone-Produkte
        break;
      case 'cameras':
        products = cameraProducts;   // Zeige Kamera-Produkte
        break;
      case 'tablets':
        products = tabletProducts;// Zeige Tablet-Produkte
        break;
      default:
        products = allProducts; // Standardmäßig alle Produkte anzeigen
        break;
    }

          // Zeige die Produkte als Karten an
    return (
      <div className="row product-list">
        {products.map((product, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 product-card">
              <img src={product.image} className="card-img-top" alt={product.name} /> {/* Produktbild */}
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5> {/* Name des Produkts */}
          <p className="card-text">${product.price.toFixed(2)}</p> {/* Preis des Produkts */}
                <p className="card-text">{product.description}</p> {/* Beschreibung des Produkts */}
                <button className="btn btn-primary" onClick={() => addToCart(product)}>In den Warenkorb</button> {/* Button, um das Produkt in den Warenkorb zu legen */}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Funktion, um den Warenkorb anzuzeigen
  const renderCart = () => {
    return (
      <div className="cart-modal">
        <h2>Warenkorb</h2> {/* Überschrift des Warenkorbs */}
        {cart.length === 0 ? ( // Wenn der Warenkorb leer ist
          <p>Dein Warenkorb ist leer</p> // Nachricht für einen leeren Warenkorb
  ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>  // Jedes Produkt im Warenkorb auflisten
            ))}
    </ul>
        )}
        <button className="btn btn-secondary" onClick={() => setShowCart(false)}>Schließen</button>  // Button zum Schließen des Warenkorbs
      </div>
    );
  };

  return (
    <div className="container">
      <header className="header">
     <div className="top-bar">
          <div className="top-bar-left">
       <span>Land: Deutschland | Sprache: Deutsch | Privatkunde</span> {/* Informationen zu Sprache und Land */}
          </div>
       <div className="top-bar-right">
          <span style={{ cursor: 'pointer' }} onClick={() => setShowCart(true)}>
              Mein Konto | Warenkorb ({cart.length}) {/* Anzahl der Produkte im Warenkorb anzeigen */}
        </span>
          </div>
        </div>

        <div className="main-header">
          <h1 style={{ cursor: 'pointer' }} onClick={() => setCategory('home')}>H-Electro</h1> {/* Klick auf H-Electro bringt zur Startseite */}
          <nav>
            <ul className="nav main-nav">              <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory('home')}>Home</a></li> {/* Link zur Startseite */}
          <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory('smartphones')}>Smartphones</a></li> {/* Link zur Smartphone-Seite */}
          <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory('laptops')}>Laptops</a></li> {/* Link zur Laptop-Seite */}
        <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory('cameras')}>Cameras</a></li> {/* Link zur Kamera-Seite */}
              <li className="nav-item"><a className="nav-link" href="#" onClick={() => setCategory('tablets')}>Tablets</a></li> {/* Link zur Tablet-Seite */}
            </ul>
          </nav>
     </div>
      </header>

      <main>
        <div className="hero-section">
          <div className="hero-item" style={{ backgroundColor: 'red' }}>
            <h2>Laptop Collection</h2>
            <a href="#" className="btn btn-light" onClick={() => setCategory('laptops')}>Shop Now</a> {/* Link zu Laptop-Produkten */}
          </div>
          <div className="hero-item" style={{ backgroundColor: 'blue' }}>
            <h2>Smartphones Collection</h2>
            <a href="#" className="btn btn-light" onClick={() => setCategory('smartphones')}>Shop Now</a> {/* Link zu Smartphone-Produkten */}
          </div>
          <div className="hero-item" style={{ backgroundColor: 'green' }}>
            <h2>Tablets Collection</h2>
            <a href="#" className="btn btn-light" onClick={() => setCategory('tablets')}>Shop Now</a> {/* Link zu Tablet-Produkten */}
          </div>
        </div>

        <section>
          <h2>Product List</h2> {/* Überschrift für die Produktliste */}
          {renderProducts()} {/* Die Funktion, um die Produkte anzuzeigen */}
     </section>

        {showCart && renderCart()} {/* Wenn "showCart" auf true gesetzt ist, wird der Warenkorb angezeigt */}
      </main>

      <footer className="footer">
        <div className="footer-info">
          <p>Kontakt | Hilfe | Datenschutz | Impressum</p> {/* Fußzeile mit Kontakt- und Impressumslinks */}
        </div>
      </footer>
    </div>
  );
};

export default App;
