const mongoose = require('mongoose');
//connect to mongo and use the set of react-app
const DB_URL = 'mongodb://127.0.0.1:27017/react-app';
mongoose.connect(DB_URL);