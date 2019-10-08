"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../database/connection");
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING(40),
        unique: true,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.STRING(),
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    sequelize: connection_1.connection,
    tableName: 'users'
});
