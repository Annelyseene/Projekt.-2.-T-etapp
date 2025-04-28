const express = require('express');
const router = express.Router();
const { addPart, getPartsByDevice } = require('../controllers/partController');

router.post('/', addPart);
router.get('/device/:device_id', getPartsByDevice);

module.exports = router;
