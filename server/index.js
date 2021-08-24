const express = require('express');
const mongoose = require('mongoose');

const route = require('./route/routes');

const app = express();




app.use('/about', route);

// const url = 'mongodb+srv://anilraj:anilraj5@cluster0.kk74h.mongodb.net/mern180821?retryWrites=true&w=majority'
const url =   'mongodb+srv://anilraj:anilraj5@cluster0.rczj3.mongodb.net/mern240821?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('database successfully connected')
}).catch(err => {
    console.log("Error: ", err.message)
})


const port = 4000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})