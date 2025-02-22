const path = require('path');
const express = require('express');
require('colors');

const errorHandler = (err, req, res, next) => {
    console.error(`[${new Date().toISOString()}] Error: ${err.message}`.red);
    console.error(`Stack trace: ${err.stack}`.red);

    // Serve the custom 500 error page
    res.status(500).sendFile(path.join(__dirname, '../../public/500.html'));
};

module.exports = errorHandler;
