'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert (
      "Users",
      [
        {
          fullName: "Alevtina R",
          login: "ally",
          email: "ally@ally.com",
          password: "0000",
          role: "admin",
          info: "lead",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Dmitry B",
          login: "dim",
          email: "dim@dim.com",
          password: "1111",
          role: "user",
          info: "user+",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
