const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const purchasingSchema = new Schema({
    itemName : String,
    price : Number,
    quantity : Number,
    purchaseDate : Date,
    note : String
} , { timestamps : true})

const Purchasing = mongoose.model('Purchasing',purchasingSchema)

module.exports = Purchasing