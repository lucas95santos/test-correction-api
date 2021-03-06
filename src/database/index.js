import Sequelize from 'sequelize';
// database config
import databaseConfig from '../config/database';
// models
import User from '../app/models/User';
import SchoolClass from '../app/models/SchoolClass';
import Student from '../app/models/Student';
import Exam from '../app/models/Exam';
import Question from '../app/models/Question';

const models = [User, SchoolClass, Student, Exam, Question];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
