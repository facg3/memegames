const express = require('express');

const router = express.Router();
const home = require('./home');
const search = require('./search');
const singlePage = require('./singlePage');
const uploadGame = require('./uploadGame');

router.post('/getGame', search);
router.post('/addGame', uploadGame.post);
router.get('/', home.get);
router.get('/singlePage', singlePage.get);
module.exports = router;
