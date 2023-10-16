'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('orders', 'user_id', {
      type: Sequelize.STRING,
      after: 'channel_id'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('orders', 'user_id')
  }
};
