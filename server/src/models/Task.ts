import { connection } from '../database/connection';
import { Model, DataTypes } from 'sequelize';
import { User } from './User';

export class Task extends Model {

    public id!: number;

    public title!: string;

    public content!: string;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;

}

Task.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING(),
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    sequelize: connection,
    tableName: 'tasks'
});

User.hasMany(Task, { as: 'tasks', foreignKey: 'userId' });
Task.belongsTo(User, { as: 'user', foreignKey: 'userId' });