import Student from '../models/Student';

class StudentController {
  async store(request, response) {
    try {
      const {
        registration,
        name,
        email,
        schoolclass_id,
      } = await Student.create(request.body);

      return response.status(201).json({
        registration,
        name,
        email,
        schoolclass_id,
      });
    } catch (err) {
      return response.status(400).json({
        error: 'Erro ao cadastrar aluno',
      });
    }
  }

  async index(request, response) {
    try {
      const students = await Student.findAll();

      return response.status(200).json({
        students,
      });
    } catch (err) {
      return response.status(500).json({
        error: 'Erro ao buscar alunos',
      });
    }
  }
}

export default new StudentController();
