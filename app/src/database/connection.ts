import { Sequelize, Options } from 'sequelize';
import config from '../../config/config.json';

// const dbConfig: Options = (process.env.MODE === 'production' ? config.production : config.development) as Options;
const dbConfig: Options = (config.production) as Options;

// dbConfig.host = process.env.DATABASE_URL || dbConfig.host;

export const connection = new Sequelize(dbConfig);
