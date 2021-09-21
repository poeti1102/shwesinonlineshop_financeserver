const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

const orderSchema = new Schema({
    itemName : {
        type : String,
        required : true,
    },
    price : Number,
    quantity : Number,
    orderDate : Date,
    customerName : String,
    customerDetail : String,
    deliveryFee : Number,
}   , {timestamps : true})

orderSchema.plugin(mongoosePaginate)
const Order = mongoose.model('Order',orderSchema)
module.exports = Order