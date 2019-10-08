'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
          type: Sequelize.STRING(255),
          allowNull: false,
      },
      content: {
          type: Sequelize.STRING(),
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tasks');
  }
};
