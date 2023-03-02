const express = require('express');
const { customer } = require('./api');

module.exports = async (app) => {
    app.use(express.json({ limit: '1mb' }));
    customer(app);


}