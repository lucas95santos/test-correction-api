import SchoolClass from '../models/SchoolClass';

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
}

export default new SchoolClassController();
