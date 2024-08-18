const express = require('express');
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware.protect);

router.get('/', transactionController.getTransactions);
router.post('/', transactionController.addTransaction);

module.exports = router;
