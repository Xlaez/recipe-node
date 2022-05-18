const { connect } = require('mongoose');
const { collection } = require('./config');
//exports.Mongo = connect(`mongodb://0.0.0.0:27017/${collection}`);
exports.Mongo = connect('mongodb+srv://uty:user1uty@studentform.o0has.mongodb.net/chrisean_global?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })