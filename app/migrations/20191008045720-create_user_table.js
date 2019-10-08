'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
          type: Sequelize.STRING(40),
          unique: true,
          allowNull: false,
      },
      password: {
          type: Sequelize.STRING(20),
          allowNull: false,
      },
      image: {
          type: Sequelize.STRING(),
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
