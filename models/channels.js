const mongoose = require('mongoose');

const ChannelsSchema = new mongoose.Schema({
  title: String,
  members: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'users'
  }]
/*
  message: [{
    type: moonguse.SchemaTypes.ObjectId,
    ref: 'messages'
  }]
  */
});

module.exports = ChannelsSchema;
