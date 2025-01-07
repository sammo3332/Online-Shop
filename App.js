import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

// Produkte
const allProducts = [
  { name: "iphone_16 pro max", price: 19.99, description: "Das ist ein Iphone.", image: "/images/iphone_16 pro max.jpg" },
  { name: "Camera 3", price: 1199.99, description: "Eine Kamera mit 4K-Video.", image: "/images/Camera_3.jpg" },
  { name: "laptop 7", price: 1499.99, description: "Ein schneller Laptop.", image: "/images/laptop_7.jpg" },
  { name: "Iphone 15", price: 1500.99, description: "Schönes Handy", image: "/images/iphone_15.jpg" },
  { name: "iphone_13 pro max", price: 1119.99, description: "Ein iPhone.", image: "/images/iphone_13 pro max.jpg" },
  { name: "Iphone 14", price: 1300.99, description: "Unser reduziertes Iphone.", image: "/images/iphone_14.jpg" },
  { name: "iphone_15 pro max", price: 1129.99, description: "Ein iPhone15.", image: "/images/iphone_14 pro max.jpg" }
];

// Laptops
const laptopProducts = [
  { name: "laptop 7", price: 1499.99, description: "Ein leistungsstarker Laptop.", image: "/images/laptop_7.jpg" },
  { name: "Laptop 3", price: 799.99, description: "Ein kleiner Laptop.", image: "/images/laptop_3.jpg" },
  { name: "Laptop 4", price: 1099.99, description: "Laptop für Gaming.", image: "/images/laptop_4.jpg" },
  { name: "Laptop 5", price: 1299.99, description: "Ein Business-Laptop.", image: "/images/laptop_5.jpg" },
  { name: "Laptop 6", price: 699.99, description: "Ein günstiger Laptop.", image: "/images/laptop_6.jpg" }
];

// Smartphones
const smartphoneProducts = [
  { name: "iphone_16 pro max", price: 19.99, description: "Das ist ein Iphone.", image: "/images/iphone_16 pro max.jpg" },
  { name: "iphone_15 pro max", price: 1229.99, description: "Ein neues Smartphone.", image: "/images/iphone_14 pro max.jpg" },
  { name: "Iphone 15", price: 1500.99, description: "Ein iPhone15.", image: "/images/iphone_15.jpg" },
  { name: "iphone_13 pro max", price: 1119.99, description: "iPhone 13 pro max.", image: "/images/iphone_13 pro max.jpg" },
  { name: "Iphone 14", price: 1300.99, description: "Reduziertes iPhone 14.", image: "/images/iphone_14.jpg" }
];

// Kameras
const cameraProducts = [
  { name: "Camera 3", price: 1199.99, description: "Eine hochwertige Kamera.", image: "/images/camera_3.jpg" },
  { name: "Camera 1", price: 899.99, description: "Eine gute Kamera.", image: "/images/camera_1.jpg" },
  { name: "Camera 2", price: 499.99, description: "Eine kleine Kamera.", image: "/images/camera_2.jpg" }
];

// Tablets
const tabletProducts = [
  { name: "Tablet 1", price: 499.99, description: "Ein leichtes Tablet.", image: "/images/tablet_1.jpg" },
  { name: "Tablet 2", price: 599.99, description: "Ein Tablet mit scharfem Display.", image: "/images/tablet_2.jpg" }
];

const App = () => {
  const [category, setCategory] = useState('home'); 
  const [cart, setCart] = useState([]); 
  const [showCart, setShowCart] = useState(false); 

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const renderProducts = () => {
    let products;
    switch (category) {
      case 'laptops': products = laptopProducts; break;
      case 'smartphones': products = smartphoneProducts; break;
      case 'cameras': products = cameraProducts; break;
      case 'tablets': products = tabletProducts; break;
      default: products = allProducts; break;
    }

    return (
      <div className="row product-list">
        {products.map((product, index) => (
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
  };

  const renderCart = () => (
    <div className="cart-modal">
      <h2>Warenkorb</h2>
      {cart.length === 0 ? (
        <p>Dein Warenkorb ist leer</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
      )}
      <button className="btn btn-secondary" onClick={() => setShowCart(false)}>Schließen</button>
    </div>
  );

  return (
    <div className="container">
      <header className="header">
        <div className="top-bar">
          <div className="top-bar-left">
            <span>Land: Deutschland | Sprache: Deutsch | Privatkunde</span>
          </div>
          <div className="top-bar-right">
            <span style={{ cursor: 'pointer' }} onClick={() => setShowCart(true)}>
              Mein Konto | Warenkorb ({cart.length})
            </span>
          </div>
        </div>

        <div className="main-header">
          <h1 style={{ cursor: 'pointer' }} onClick={() => setCategory('home')}>H-Electro</h1>
          <nav>
            <ul className="nav main-nav">
              <li className="nav-item"><button className="nav-link btn" onClick={() => setCategory('home')}>Home</button></li>
              <li className="nav-item"><button className="nav-link btn" onClick={() => setCategory('smartphones')}>Smartphones</button></li>
              <li className="nav-item"><button className="nav-link btn" onClick={() => setCategory('laptops')}>Laptops</button></li>
              <li className="nav-item"><button className="nav-link btn" onClick={() => setCategory('cameras')}>Cameras</button></li>
              <li className="nav-item"><button className="nav-link btn" onClick={() => setCategory('tablets')}>Tablets</button></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="hero-section d-flex flex-wrap">
          <div className="hero-item" style={{ backgroundColor: 'red', flex: '1 1 100%' }}>
            <h2>Laptop Collection</h2>
            <button className="btn btn-light" onClick={() => setCategory('laptops')}>Shop Now</button>
          </div>
          <div className="hero-item" style={{ backgroundColor: 'blue', flex: '1 1 100%' }}>
            <h2>Smartphones Collection</h2>
            <button className="btn btn-light" onClick={() => setCategory('smartphones')}>Shop Now</button>
          </div>
          <div className="hero-item" style={{ backgroundColor: 'green', flex: '1 1 100%' }}>
            <h2>Tablets Collection</h2>
            <button className="btn btn-light" onClick={() => setCategory('tablets')}>Shop Now</button>
          </div>
        </div>

        <section>
          <h2>Product List</h2>
          {renderProducts()}
        </section>

        {showCart && renderCart()}
      </main>

      <footer className="footer">
        <div className="footer-info">
          <p>Kontakt | Hilfe | Datenschutz | Impressum</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
