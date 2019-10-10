import { connection } from '../database/connection';
import { Model, DataTypes } from 'sequelize';
import { Account } from './Account';
import { ITransfer } from '../../schemas/transfer.interface';

export class Transfer extends Model implements ITransfer {
    public id!: number;

    public amount!: number;

    public commentary?: string;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;

    public accountId!: number;

    public categoryId!: number;
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
