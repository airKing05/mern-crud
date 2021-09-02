const express = require('express');
const getUsers = require('../controller/userController');
const addUser = require('../controller/userController');

const route = express.Router();

route.get('/', getUsers);
route.get('/add-user', addUser);

module.exports = route;