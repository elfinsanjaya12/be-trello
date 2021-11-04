'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Items',
      [
        {
          name: 'New website codeathome',
          TodoId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'UX & UI',
          TodoId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
  },
};
