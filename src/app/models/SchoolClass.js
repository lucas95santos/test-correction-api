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

  static associate(models) {
    this.hasMany(models.Student, { as: 'students' });
  }
}

export default SchoolClass;
