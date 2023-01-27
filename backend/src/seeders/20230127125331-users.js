'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'User 1',
        email: 'user1@teste.com',
        // changeMe
        password: '$2b$10$m/5.3zKMebXR6YSi6xUNDORi/T6X3evRsLIHLu1INcqdnsTNuwou6'
      }, 
      {
        name: 'User 2',
        email: 'user2@teste.com',
        // changeMe
        password: '$2b$10$FvFNkzpLDjhH9b40o/CMZu22onIzkYKB/o/ZrRbLoYd841KorrB4a'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users')
  }
};
