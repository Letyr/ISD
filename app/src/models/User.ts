import { connection } from '../database/connection';
import { Model, DataTypes } from 'sequelize';

export class User extends Model {

    public id!: number;

    public username!: string;

    public password!: string;

    public image?: string;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;

}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING(40),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(),
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    sequelize: connection,
    tableName: 'users'
});
