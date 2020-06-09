module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('exams', 'name', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('exams', 'name');
  },
};
