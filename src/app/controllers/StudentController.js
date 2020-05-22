import Student from '../models/Student';

class StudentController {
  async store(request, response) {
    try {
      const { registration, name, email } = await Student.create(request.body);

      return response.status(201).json({
        registration,
        name,
        email,
      });
    } catch (err) {
      console.log(err);
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

  async show(request, response) {
    try {
      const student = await Student.findOne({
        where: {
          registration: request.params.registration,
        },
      });

      if (!student) {
        return response.status(404).json({
          error: `Aluno com a matrícula ${request.params.registration} não existe`,
        });
      }

      return response.status(200).json({
        student,
      });
    } catch (err) {
      return response.status(500).json({
        error: `Erro ao buscar aluno com o id ${request.params.registration}`,
      });
    }
  }
}

export default new StudentController();
