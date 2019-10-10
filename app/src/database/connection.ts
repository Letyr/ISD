import { Sequelize, Options } from 'sequelize';
import config from '../../config/config.json';

const mode = process.env.MODE === 'production' ? process.env.MODE : 'development';
const dbConfig: Options = config[mode] as Options;

export const connection = new Sequelize(dbConfig);
