const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Alle Produkte abrufen
router.get('/', async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// Einzelnes Produkt abrufen
router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

module.exports = router;
