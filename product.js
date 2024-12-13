// src/Product.js

import React from 'react';

function Product({ product }) {
  return (
    <div className="card">
      <img src={`/images/${product.image}`} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <p className="card-text">{product.description}</p>
      </div>
    </div>
  );
}

export default Product;
