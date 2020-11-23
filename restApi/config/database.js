const mongoose = require('mongoose');
const config = require('./config');
const dbName = 'TaskManager';

module.exports = () => {
    return mongoose.connect(config.dbURL + dbName, { useNewUrlParser: true, useUnifiedTopology: true });
};