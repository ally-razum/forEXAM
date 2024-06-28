'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert (
      "Events",
      [
        {
          title: "Theme 1",
          description: "description Theme 1",
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Theme 2",
          description: "description Theme 2",
          user_id: 2,
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
