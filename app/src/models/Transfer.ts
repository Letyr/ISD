import { connection } from '../database/connection';
import { Model, DataTypes } from 'sequelize';
import { Account } from './Account';

export class Transfer extends Model {
    public id!: number;

    public amount!: number;

    public commentary?: string;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;
}

Transfer.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    commentary: {
        type: DataTypes.STRING,
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
    tableName: 'transfers'
});

Account.hasMany(Transfer, { as: 'transfers', foreignKey: 'targetAccountId' });
Transfer.belongsTo(Account, { as: 'transfers', foreignKey: 'targetAccountId' });

Account.hasMany(Transfer, { as: 'transfers', foreignKey: 'sourceAccountId' });
Transfer.belongsTo(Account, { as: 'transfers', foreignKey: 'sourceAccountId' });
