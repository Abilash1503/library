const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect("mongodb+srv://abi:abi@lib.w4zhvr6.mongodb.net/?retryWrites=true&w=majority",{

useNewUrlParser: "true",
useUnifiedTopology: "true"

});
mongoose.set('strictQuery', false);
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    issuedBooks: [{
        bookName: String,
    }],
    numberOfIssuedBooks: Number,
    signedIn: Boolean
});

const User = new mongoose.model("User", userSchema);

module.exports = User;