const express = require('express');
const mongoose = require('mongoose');
const app = express();

const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`;

app.listen('3000');

mongoose.connect(dbUrl)
    .then(() => console.log("DB connected"))
    .catch(() => console.log("Error Connecting DB"))




