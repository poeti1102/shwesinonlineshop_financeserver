require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const orderRoutes = require('./routes/orderRoutes')
const purchasingRoutes = require('./routes/purchasingRoutes')

const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`;
app.listen('3000');

mongoose.connect(dbUrl)
    .then(() => console.log("DB connected"))
    .catch((error) => console.log("Error Connecting DB", error))

app.use('/api/orders/',orderRoutes)
app.use('/api/orders/',purchasingRoutes)




