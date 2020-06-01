import Exam from '../models/Exam';
import Question from '../models/Question';

class ExamController {
  async store(request, response) {
    try {
      const exam = await Exam.create(request.body);

      return response.status(201).json(exam);
    } catch (err) {
      return response.status(400).json({
        error: err,
      });
    }
  }

  async index(request, response) {
    try {
      const exams = await Exam.findAll({
        order: [['created_at', 'DESC']],
      });

      return response.status(200).json({
        exams,
      });
    } catch (err) {
      return response.status(500).json({
        error: 'Erro ao buscar provas',
      });
    }
  }

  async show(request, response) {
    try {
      const exam = await Exam.findOne({
        where: {
          id: request.params.id,
        },
        include: [
          {
            model: Question,
            as: 'questions',
            attributes: [
              'id',
              'description',
              'answers_amount',
              'answers',
              'correct_answer',
              'score',
            ],
          },
        ],
      });

      if (!exam) {
        return response.status(404).json({
          error: `A prova com o id ${request.params.id} não existe`,
        });
      }

      return response.status(200).json(exam);
    } catch (err) {
      return response.status(500).json({
        error: 'Erro ao buscar prova',
      });
    }
  }
}

export default new ExamController();
