'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return new Promise((resolve) => {
      resolve();
    });
    return queryInterface.bulkInsert('transfers', []);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('transfers');
  }
};
