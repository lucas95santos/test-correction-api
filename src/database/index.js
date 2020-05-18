import Sequelize from 'sequelize';
// database config
import databaseConfig from '../config/database';
// models
import User from '../app/models/User';
import SchoolClass from '../app/models/SchoolClass';

const models = [User, SchoolClass];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
