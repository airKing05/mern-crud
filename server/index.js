const express = require('express');
const mongoose = require('mongoose');

const app = express();
const route = express.Router();

route.get('/', (req, res)=>{
    res.status(200).json('hellow form the server side')
});
app.use('/about', route);


const url = 'mongodb+srv://anilraj:anilraj5@cluster0.kk74h.mongodb.net/MERN-CRUD?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
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