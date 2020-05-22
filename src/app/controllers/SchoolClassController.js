import SchoolClass from '../models/SchoolClass';
import Student from '../models/Student';

class SchoolClassController {
  async store(request, response) {
    try {
      const { name, grade } = await SchoolClass.create(request.body);

      return response.status(201).json({
        name,
        grade,
      });
    } catch (err) {
      return response.status(400).json({
        error: 'Essa turma já foi cadastrada',
      });
    }
  }

  async index(request, response) {
    try {
      const schoolClasses = await SchoolClass.findAll();

      return response.status(200).json({
        schoolClasses,
      });
    } catch (err) {
      return response.status(500).json({
        error: 'Erro ao buscar turmas',
      });
    }
  }

  async show(request, response) {
    try {
      const schoolClass = await SchoolClass.findOne({
        where: {
          id: request.params.id,
        },
        include: [
          {
            model: Student,
            as: 'students',
            attributes: ['registration', 'name', 'email'],
          },
        ],
      });

      if (!schoolClass) {
        return response.status(404).json({
          error: `Turma com o id ${request.params.id} não existe`,
        });
      }

      return response.status(200).json({
        schoolClass,
      });
    } catch (err) {
      return response.status(500).json({
        error: 'Erro ao buscar turma',
      });
    }
  }
}

export default new SchoolClassController();
