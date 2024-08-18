const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/user', userRoutes);

app.use(errorHandler);

module.exports = app;

const express = require('express');
const expenseRoutes = require('./routes/expenseRoutes');

// Other code...

app.use('/api/expenses', expenseRoutes);

// Other code...
