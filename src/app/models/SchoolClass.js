import Sequelize, { Model } from 'sequelize';

class SchoolClass extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        grade: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default SchoolClass;
