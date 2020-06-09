import Sequelize, { Model } from 'sequelize';

class Exam extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        questions_amount: Sequelize.INTEGER,
        status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Question, { as: 'questions' });
  }
}

export default Exam;
