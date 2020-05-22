module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('school_classes', 'amount_students', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('school_classes', 'amount_students');
  },
};
