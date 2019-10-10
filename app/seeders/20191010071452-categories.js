'use strict';

const imagePath = 'public/assets/icons/';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [{
      name: 'Продукты',
      consumption: true,
      icon: `${imagePath}food.png`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Счета',
      consumption: true,
      icon: `${imagePath}bill.png`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Транспорт',
      consumption: true,
      icon: `${imagePath}bus.png`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Здоровье',
      consumption: true,
      icon: `${imagePath}health.png`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Спорт',
      consumption: true,
      icon: `${imagePath}sport.png`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Домашние животные',
      consumption: true,
      icon: `${imagePath}pets.png`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Внешний вид',
      consumption: true,
      icon: `${imagePath}cloth.png`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Бытовая химия',
      consumption: true,
      icon: `${imagePath}chemistry.png`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Развлечения',
      consumption: true,
      icon: `${imagePath}entertainment.png`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Дом',
      consumption: true,
      icon: `${imagePath}home.png`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Подарки',
      consumption: true,
      icon: `${imagePath}gift.png`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Зарплата',
      consumption: true,
      icon: `${imagePath}salary.png`,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Активы',
      consumption: true,
      icon: `${imagePath}active.png`,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories');
  }
};
