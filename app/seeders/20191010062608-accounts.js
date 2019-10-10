'use strict';

const imagePath = 'public/assets/icons/';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('accounts', [{
      name: 'Наличные',
      balance: 0,
      icon: `${imagePath}cash.svg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Карта',
      balance: 0,
      icon: `${imagePath}card.svg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Накопления',
      balance: 0,
      icon: `${imagePath}storage.svg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Заем',
      balance: 0,
      icon: `${imagePath}loan.svg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('accounts');
  }
};
