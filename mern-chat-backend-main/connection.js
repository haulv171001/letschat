const mongoose = require('mongoose');
require('dotenv').config();
const url = "mongodb+srv://haulv37:haulv3737@cluster0.1onzm7q.mongodb.net/dbuser?retryWrites=true&w=majority"
mongoose.connect(url, ()=> {
  console.log('connected to mongodb')
})
