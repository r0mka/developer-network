const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

const app = express();

connectDB();

// Define Routes
app.use('/api/users', require('./routes/api/users'));

app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER RUNNING AT PORT: ${PORT}`));
