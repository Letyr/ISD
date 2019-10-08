"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
/* GET users listing. */
exports.userController = express_1.Router().get('/', function (req, res, next) {
    User_1.User.findAll().then(users => {
        res.send(users);
    });
});
