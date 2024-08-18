const Expense = require('../models/Expense');

exports.getExpenseById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const expense = await Expense.findByPk(id);

        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        res.json(expense);
    } catch (error) {
        next(error);
    }
};

exports.updateExpense = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { description, amount, date } = req.body;

        const expense = await Expense.findByPk(id);
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        expense.description = description;
        expense.amount = amount;
        expense.date = date;
        await expense.save();

        res.json(expense);
    } catch (error) {
        next(error);
    }
};
