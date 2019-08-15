const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await 
        db('cars');
            res.status(200).json({ success: true, cars });
    } catch(err) {
        res.status(500).json({ success: false, error: 'There was an error while retrieving the list of cars.', err });
    }
});

