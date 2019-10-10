'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.sequelize.query(
        `SELECT id, name from accounts`
      ),
      queryInterface.sequelize.query(
        `SELECT id, name from categories`
      )
    ]).then(data => {
      const [accounts, categories] = data.map(result => result[0]);

      return queryInterface.bulkInsert('changes', [{
        commentary: 'Покупка в супермаркете',
        amount: 100,
        accountId: accounts.find(account => account.name === 'Карта').id,
        categoryId: categories.find(category => category.name === 'Продукты').id,
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('changes');
  }
};
