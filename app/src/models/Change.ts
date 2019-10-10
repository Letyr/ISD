import { connection } from '../database/connection';
import { Model, DataTypes,  } from 'sequelize';
import { Account } from './Account';
import { Category } from './Category';
import { ITransfer } from '../../schemas/transfer.interface';

export class Change extends Model implements ITransfer {
    public id!: number;

    public amount!: number;

    public commentary?: string;

    public getAccount!: () => Promise<Account>;

    public getCategory!: () => Promise<Category>;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;

    public accountId!: number;

    public categoryId!: number;
}

Change.init({
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
    tableName: 'changes'
});

Change.belongsTo(Account, { as: 'account', foreignKey: 'accountId', targetKey: 'id' });
Account.hasMany(Change, { as: 'changes', foreignKey: 'accountId' });

Change.belongsTo(Category, { as: 'categories', foreignKey: 'categoryId', targetKey: 'id' });
Category.hasMany(Change, { as: 'changes', foreignKey: 'categoryId' });