const express = require('express');
const userRoute = require('./user');


const app = express();
app.use('/user',userRoute);
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