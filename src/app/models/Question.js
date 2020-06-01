import Sequelize, { Model } from 'sequelize';

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        answers_amount: Sequelize.INTEGER,
        answers: Sequelize.ARRAY(Sequelize.STRING),
        correct_answer: Sequelize.INTEGER,
        score: Sequelize.INTEGER,
        exam_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Question;
