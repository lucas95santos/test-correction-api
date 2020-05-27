import Student from '../models/Student';
import SchoolClass from '../models/SchoolClass';

class StudentController {
  async store(request, response) {
    try {
      const { registration, name, email, SchoolClassId } = await Student.create(
        request.body
      );

      const schoolClass = await SchoolClass.findOne({
        where: {
          id: SchoolClassId,
        },
      });

      if (schoolClass) {
        await SchoolClass.update(
          {
            amount_students: schoolClass.amount_students + 1,
          },
          {
            where: {
              id: SchoolClassId,
            },
          }
        );
      }

      return response.status(201).json({
        registration,
        name,
        email,
      });
    } catch (err) {
      return response.status(400).json({
        error: 'Erro ao cadastrar aluno',
      });
    }
  }

  async index(request, response) {
    try {
      const students = await Student.findAll({
        order: [['name', 'ASC']],
      });

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
