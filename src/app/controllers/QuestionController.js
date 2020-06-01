import Question from '../models/Question';

class QuestionController {
  async store(request, response) {
    try {
      const question = await Question.create(request.body);

      return response.status(201).json(question);
    } catch (err) {
      return response.status(400).json({
        error: 'Erro ao cadastrar questão',
      });
    }
  }
}

export default new QuestionController();
