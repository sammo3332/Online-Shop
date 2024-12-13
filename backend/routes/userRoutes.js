const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Registrierung
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Überprüfe, ob der Benutzer bereits existiert
    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash das Passwort
    const hashedPassword = await bcrypt.hash(password, 10);

    // Erstelle den Benutzer
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '30d' }),
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
});

module.exports = router;
