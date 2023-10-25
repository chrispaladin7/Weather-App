// weatherRoute.js
const express = require('express');
const router = express.Router();
const searchCtrl = require('../../controllers/api/searches');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//GET /api/searches
router.get('/:city',ensureLoggedIn,searchCtrl.search);

module.exports = router;
