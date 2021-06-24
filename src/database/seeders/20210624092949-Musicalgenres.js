/* eslint-disable no-unused-vars */
const MusicalGenres = require("../seeds/20210624092949-musical_genres");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Musicalgenres", MusicalGenres, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Musicalgenres", null, {});
  },
};
