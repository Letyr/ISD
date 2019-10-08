"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../database/connection");
const sequelize_1 = require("sequelize");
const User_1 = require("./User");
class Task extends sequelize_1.Model {
}
exports.Task = Task;
Task.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    content: {
        type: sequelize_1.DataTypes.STRING(),
    },
    createdAt: sequelize_1.DataTypes.DATE,
    updatedAt: sequelize_1.DataTypes.DATE,
}, {
    sequelize: connection_1.connection,
    tableName: 'tasks'
});
User_1.User.hasMany(Task, { as: 'tasks', foreignKey: 'userId' });
Task.belongsTo(User_1.User, { as: 'user', foreignKey: 'userId' });
