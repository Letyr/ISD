import { connection } from '../database/connection';
import { Model, DataTypes } from 'sequelize';
import { Change } from './Change';

export class Account extends Model {
    public id!: number;

    public name!: string;

    public balance!: string;

    public icon!: string;

    public getChanges!: () => Promise<Change>;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;

}

Account.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    balance: {
        type: DataTypes.FLOAT,
    },
    icon: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    }
}, {
    sequelize: connection,
    timestamps: true,
    tableName: 'accounts'
});

