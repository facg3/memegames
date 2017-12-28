const express = require('express');

const router = express.Router();

const home = require('./home');
const search = require('./search');

router.post('/getGame', search);
router.get('/', home.get);
module.exports = router;
