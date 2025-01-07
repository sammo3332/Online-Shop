import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Produktdaten
const allProducts = [
  { name: "iphone_16 pro max", price: 19.99, description: "Das ist ein Iphone.", image: "/images/iphone_16 pro max.jpg" },
  { name: "Camera 3", price: 1199.99, description: "Eine Kamera mit 4K-Video.", image: "/images/camera_3.jpg" },
  { name: "laptop 7", price: 1499.99, description: "Ein schneller Laptop.", image: "/images/laptop_7.jpg" },
  { name: "Iphone 15", price: 1500.99, description: "Schönes Handy", image: "/images/iphone_15.jpg" },
  { name: "iphone_13 pro max", price: 1119.99, description: "Ein iPhone.", image: "/images/iphone_13 pro max.jpg" },
  { name: "Iphone 14", price: 1300.99, description: "Unser reduziertes Iphone.", image: "/images/iphone_14.jpg" },
  { name: "iphone_15 pro max", price: 1129.99, description: "Ein iPhone15.", image: "/images/iphone_14 pro max.jpg" }
];

// Warenkorb-Seite
const CartPage = ({ cart, removeFromCart }) => (
  <div className="container mt-4">
    <h2>Dein Warenkorb</h2>
    {cart.length === 0 ? (
      <p>Dein Warenkorb ist leer.</p>
    ) : (
      <ul className="list-group">
        {cart.map((item, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            <span>{item.name} - ${item.price.toFixed(2)}</span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeFromCart(index)}
            >
              Entfernen
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const App = () => {
  const [category, setCategory] = useState('home'); // Zustand für die aktuelle Kategorie
  const [cart, setCart] = useState([]); // Zustand für den Warenkorb

  const addToCart = (product) => {
    setCart([...cart, product]); // Produkt in den Warenkorb hinzufügen
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index)); // Produkt aus dem Warenkorb entfernen
  };

  const renderProducts = () => (
    <div className="row product-list">
      {allProducts.map((product, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
          <div className="card mb-4 product-card">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price.toFixed(2)}</p>
              <p className="card-text">{product.description}</p>
              <button className="btn btn-primary" onClick={() => addToCart(product)}>In den Warenkorb</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Router>
      <div className="container">
        <header className="header">
          <div className="top-bar">
            <div className="top-bar-left">
              <span>Land: Deutschland | Sprache: Deutsch | Privatkunde</span>
            </div>
            <div className="top-bar-right">
              <Link to="/cart" style={{ textDecoration: 'none', color: '#007bff' }}>
                Mein Warenkorb ({cart.length})
              </Link>
            </div>
          </div>

          <div className="main-header">
            <h1 style={{ cursor: 'pointer' }} onClick={() => setCategory('home')}>H-Electro</h1>
            <nav>
              <ul className="nav main-nav">
                <li className="nav-item">
                  <button className="nav-link btn" onClick={() => setCategory('home')}>Home</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn" onClick={() => setCategory('smartphones')}>Smartphones</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn" onClick={() => setCategory('laptops')}>Laptops</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn" onClick={() => setCategory('cameras')}>Cameras</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn" onClick={() => setCategory('tablets')}>Tablets</button>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={renderProducts()} />
            <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-info">
            <p>Kontakt | Hilfe | Datenschutz | Impressum</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
