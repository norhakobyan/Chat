const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  username: String,
  age: Number
});

module.exports = UsersSchema;
