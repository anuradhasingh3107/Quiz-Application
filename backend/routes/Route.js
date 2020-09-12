//Defining routes
const express = require('express');
const router=express.Router();

router.post('/login', function(req, res, next) {
    console.log("Login route");
    // Handle login
});

router.post('/signup', function(req, res, next) {
    console.log("Register route");
    // Handle login
});

module.export=router;