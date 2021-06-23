/* eslint-disable no-unused-vars */
const musicalGenres = require("../seeds/20210623155256-musical_genres");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Musicalgenres", musicalGenres, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Musicalgenres", null, {});
  },
};
