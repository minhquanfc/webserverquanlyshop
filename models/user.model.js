const mongoose = require('mongoose');
const url = "mongodb+srv://minhquanfc:Minhquanfcpro68@cluster0.a207y.mongodb.net/QuanLyShop?retryWrites=true&w=majority";
mongoose.connect(url);

const userSchema = mongoose.Schema({
    name:'String',
    email:'String',
    password:'String',
    phonenumber:'String',
    address:'String',
});

const User = mongoose.model("User",userSchema);
module.exports = User;