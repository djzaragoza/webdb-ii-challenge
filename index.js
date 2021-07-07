const express = require('express');

const carsRouter = require('./cars/cars-router');

const server = express();

server.use(express.json());
server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.send('<h2>Let\'s rock and roll!</h2>');
});

server.listen(4000, () => {
    console.log('server listening on port 4000.');
});