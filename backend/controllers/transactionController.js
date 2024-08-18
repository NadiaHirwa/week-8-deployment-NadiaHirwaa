const Transaction = require('../models/Transaction');

exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.findAll({ where: { userId: req.user.id } });
        res.json(transactions);
    } catch (error) {
        next(error);
    }
};

exports.addTransaction = async (req, res, next) => {
    try {
        const { description, amount, date } = req.body;
        const transaction = await Transaction.create({
            description,
            amount,
            date,
            userId: req.user.id,
        });
        res.status(201).json(transaction);
    } catch (error) {
        next(error);
    }
};
