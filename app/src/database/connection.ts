import { Sequelize, Options } from 'sequelize';
import config from '../../config/config.json';

// @TODO зависимость от env.MODE
const dbConfig: Options = (true ? config.development : config.production) as Options;

dbConfig.host = process.env.DATABASE_URL || dbConfig.host;

export const connection = new Sequelize(dbConfig);
