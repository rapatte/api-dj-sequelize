module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DjMusicalGenres", {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      dj_id: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      musicalgenre_id: {
        allowNull: false,
        type: Sequelize.UUID,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("DjMusicalGenres");
  },
};
