const { request } = require('express');
const User = require('../models/userSchema');

const getUsers = async (req, res) => {
    // res.status(200).json('hello form the server side')
    try{
        await newUser.find();
        res.json(newUser); 
    }
    catch(error){
        res.json({message: error.message})
    }
};
const addUser = async (req, res) => {
     const user = request.body;
     const newUser = new User(user)
    try{
        await newUser.save();
        res.json(newUser); 
    }
    catch(error){
        res.json({message: error.message})
    }
};

module.exports = getUsers, addUser; 