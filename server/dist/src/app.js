"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { userController } from './routes/users';
exports.app = express_1.default();
// app.use('/users', userController);
exports.app.use('/users', (req, res) => {
    res.send('Hello world!');
});
