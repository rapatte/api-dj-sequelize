module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DjMusicalgenres", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default: Sequelize.fn("uuid_generate_v4"),
      },
      dj_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Djs",
          key: "id",
        },
      },
      musicalgenre_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Musicalgenres",
          key: "id",
        },
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
  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("DjMusicalgenres");
  },
};
