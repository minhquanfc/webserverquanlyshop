const mongoose = require('mongoose');
const url = "mongodb+srv://minhquanfc:Minhquanfcpro68@cluster0.a207y.mongodb.net/QuanLyShop?retryWrites=true&w=majority";
mongoose.connect(url);

const categorySchema = mongoose.Schema({
    name:'String',
});

const Category = mongoose.model("Category",categorySchema);
module.exports = Category;