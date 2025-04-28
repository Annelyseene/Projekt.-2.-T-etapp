const express = require('express');
const router = express.Router();
const { createDevice, updateDevice, deleteDevice, getAllDevices } = require('../controllers/deviceController');

router.post('/', createDevice);
router.put('/:id', updateDevice);
router.delete('/:id', deleteDevice);
router.get('/', getAllDevices);

module.exports = router;
