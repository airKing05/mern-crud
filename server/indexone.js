const express = require('express');
const mongoose = require('mongoose');
const app = express();
const route = express.Router();
const port = 4000;
const url =  'mongodb+srv://anilraj:anilraj5@cluster0.kk74h.mongodb.net/mern180821?retryWrites=true&w=majority'
// const url =  'mongodb+srv://anilraj:anilraj5@cluster0.wbrda.mongodb.net/mern270721?retryWrites=true&w=majority'

mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connection successfully')
}).catch((err) => {
    console.log('ERROR: ', err.message)
})
app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})