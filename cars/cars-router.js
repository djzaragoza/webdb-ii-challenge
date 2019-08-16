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

router.post('/', async (req, res) => {
    const carInfo = req.body;

    try {
        const car = await
        db('cars').insert(carInfo);
            res.status(201).json({ success: true, car });
    } catch(err) {
        res.status(500).json({ success: false, error: 'There was an error while adding the car to the database.', err });
    }
});

router.put('/id:', async (req, res ) => {
    const{id} = req.params;
    const update = req.body;

    try {
        const car = await
        db('cars').where({id}).update(update);
        if (car) {
            res.status(200).json({ success: true, car });
        } else {
            res.status(404).json({ success: false, error: `Could not find car with ${id} `});
        }
    } catch (err) {
        res.status(500).json({ success: false, error: 'There was an error while updating the car. ', err });
    }
});

router.delete('/:id', async (req, res ) => {
    const {id} = req.params;

    try {
        const deleted = await
        db('cars').where({id}).del();
        if(deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ success: false, error: `Could not find car with id ${id} `});
        }
    } catch (err) {
        res.status(500).json({ success: false, error: 'There was an error while deleting the car. '});
    }
});

module.exports = router;