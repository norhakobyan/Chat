const WebSocket = require('ws');
const mongoose = require('mongoose');

const chatDB = mongoose.createConnection('mongodb://localhost:27017/chat', {
  useNewUrlParser: true
});
let UsersSchema = require('./models/users');
let ChannelsSchema = require('./models/channels');
let MessagesSchema = require('./models/messages');

let db = {
  users: chatDB.model('users', UsersSchema),
  channels: chatDB.model('channels', ChannelsSchema),
  messages: chatDB.model('messages', MessagesSchema)
}
const wss = new WebSocket.Server({ port: 3003 });
let clients = [];
wss.on('connection', function connection(ws) {
  clients.push(ws);
  UsersSchema.usename = ws;
  ws.on('message', function incoming(message) {
    (clients || []).forEach((c, ix) => {
      if(c == ws) {
        return;
      }
      c.send('User: ' + ix + '. Message: ' + message);
    });
  });
  ws.send('congrats!');
  ws.send(UsersSchema.usename);
});
