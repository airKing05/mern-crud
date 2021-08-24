const express = require('express');
const getUsers = require('../controller/userController');

const route = express.Router();

route.get('/', getUsers);

module.exports = route;