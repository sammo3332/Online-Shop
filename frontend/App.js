import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CartProvider, useCart } from './CartContext'; // Importieren des Warenkorb-Kontexts
import CartPage from './CartPage'; // Importieren der Warenkorb-Seite

const allProducts = [
  { name: "iphone_16 pro max", price: 19.99, description: "Ein iPhone-Beispiel.", image: "/images/iphone_16 pro max.jpg" },
  { name: "Camera 3", price: 1199.99, description: "Eine Kamera mit 4K.", image: "/images/camera_3.jpg" },
  { name: "laptop 7", price: 1499.99, description: "Ein schneller Laptop.", image: "/images/laptop_7.jpg" },
  { name: "Iphone 15", price: 1500.99, description: "Ein weiteres iPhone.", image: "/images/iphone_15.jpg" },
];

const ProductList = () => {
  const { addToCart } = useCart(); // Zugriff auf die Funktion zum Hinzufügen zum Warenkorb

  return (
    <div className="row product-list">
      {allProducts.map((product, index) => (
        <div className="col-md-4" key={index}>
          <div className="card mb-4 product-card">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price.toFixed(2)}</p>
              <p className="card-text">{product.description}</p>
              <button className="btn btn-primary" onClick={() => addToCart(product)}>In den Warenkorb</button> {/* Button, um Produkt in den Warenkorb hinzuzufügen */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <header className="header">
          <div className="top-bar">
            <div className="top-bar-right">
              <Link to="/cart">
                Warenkorb anzeigen
              </Link> {/* Link zur Warenkorb-Seite */}
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<ProductList />} /> {/* Route zur Produktliste */}
            <Route path="/cart" element={<CartPage />} /> {/* Route zur Warenkorb-Seite */}
          </Routes>
        </main>

        <footer className="footer">
          <p>Kontakt | Hilfe | Datenschutz | Impressum</p>
        </footer>
      </Router>
    </CartProvider>
  );
};

export default App;
