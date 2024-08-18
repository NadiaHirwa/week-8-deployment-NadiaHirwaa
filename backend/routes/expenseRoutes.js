const express = require('express');
const { getExpenseById, updateExpense } = require('../controllers/expenseController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/:id')
    .get(protect, getExpenseById)
    .put(protect, updateExpense);

module.exports = router;
