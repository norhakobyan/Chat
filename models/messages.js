const mangust = require('mongoose');

const MessagesSchema = new mangust.Schema({
  text: String,
  date: {type: Date, default: Date.now},
  author: {
    type: mangust.SchemaTypes.ObjectId,
    ref: 'users'
  },
  channel: {
    type: mangust.SchemaTypes.ObjectId,
    ref: 'channels'
  }
});

module.exports = MessagesSchema;
