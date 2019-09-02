const express = require('express');
const mongoose = require('mongoose');

//connect to mongo and use the set of react-app
const DB_URL = 'mongodb://127.0.0.1:27017/react-app';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function () {
   console.log('success');
});
//Similar to mysql table, mongo has the concept of documents and fields
const User = mongoose.model('user',mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}));
//add data
// User.create({
//    user: 'jee',
//    age: '25'
// },function (err,doc) {
//     console.log((!err)?doc:err);
// });
User.remove({'user':'jee'});
//create app
User.update({'user':'alex'},{$set:{'age':'20'}},function (err,doc) {
    console.log(doc);
});
const app = express();
app.get('/',function (req,res) {
   res.send('<h1>hello world</h1>')
});
app.get('/data',function (req,res) {
    User.find({},function (err,doc) {
        res.json(doc)
    });
});
app.listen(9093,function () {
    console.log('node app start at port 9093')
});