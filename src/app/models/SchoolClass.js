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

    this.removeAttribute('id');
    return this;
  }
}

export default SchoolClass;
