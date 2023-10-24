// weatherRoute.js
const express = require('express');
const router = express.Router();
const searchCtrl = require('../../controllers/api/searches');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Define a route for weather search
router.get('/search',ensureLoggedIn,searchCtrl.search);

module.exports = router;
