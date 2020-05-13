import Mail from '../../lib/Mail';

class ContactController {
  async store(request, response) {
    const { name, email, subject, message } = request.body;

    try {
      await Mail.sendMail({
        from: `${name} <${email}>`,
        subject: `${subject}`,
        text: `${message}`,
      });

      return response.status(200).json({
        message: 'E-mail enviado com sucesso.',
      });
    } catch (err) {
      return response.status(500).json({
        error: 'Erro ao enviar e-mail. Por favor tente novamente.',
      });
    }
  }
}

export default new ContactController();
