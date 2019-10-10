import { connection } from '../database/connection';
import { Model, DataTypes } from 'sequelize';
import { Change } from './Change';
import { ICategory } from '../../schemas/category.interface';

export class Category extends Model implements ICategory {
    public id!: number;

    public name!: string;

    public consumption!: boolean;

    public icon!: string;

    public getChanges!: () => Promise<Change[]>;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;

}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    consumption: {
        type: DataTypes.BOOLEAN,
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
    tableName: 'categories'
});
