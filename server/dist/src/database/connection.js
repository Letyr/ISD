"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_json_1 = __importDefault(require("../../config/config.json"));
// @TODO зависимость от env.MODE
const dbConfig = (true ? config_json_1.default.development : config_json_1.default.production);
exports.connection = new sequelize_1.Sequelize(dbConfig);
