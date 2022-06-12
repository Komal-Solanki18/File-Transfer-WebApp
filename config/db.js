
require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 
    // mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true }).then(() => {
    //     console.log('connection successful');
    // }).catch((err) => console.log('Not Connected connection'));
    //const connection = mongoose.connection;
    // connection.once('open', () => {
    //     console.log('Database connected 🥳🥳🥳🥳');
    // }).catch(err => {
    //     console.log('Connection failed ☹️☹️☹️☹️');
    // });

}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;

mongoose.connect('mongodb://localhost:27017/FileSharingWebsite',
 { useNewUrlParser: true, useUnifiedTopology: true });
    //mongoose.connect('mongodb://127.0.0.1/test')


    const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});