import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        registration: Sequelize.STRING,
        name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.removeAttribute('id');
    return this;
  }

  static associate(models) {
    this.belongsTo(models.SchoolClass, { foreignKey: 'schoolclass_id' });
  }
}

export default Student;
