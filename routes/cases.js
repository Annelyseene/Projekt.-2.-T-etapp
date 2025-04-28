const express = require('express');
const router = express.Router();
const { createCase, deleteCase, updateStatus } = require('../controllers/caseController');

router.post('/', createCase);
router.delete('/:id', deleteCase);
router.patch('/:id/status', updateStatus);

module.exports = router;
