const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Dj extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Club, { foreignKey: "club_id", as: "clubs" });
      this.belongsToMany(models.Musicalgenre, {
        through: "DjMusicalgenres",
        foreignKey: "dj_id",
        as: "musical_genres",
      });
    }
  }
  Dj.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      url_name: DataTypes.STRING,
      name: DataTypes.STRING,
      biography: DataTypes.STRING,
      soundcloud: DataTypes.STRING,
      facebook: DataTypes.STRING,
      instagram: DataTypes.STRING,
      spotify: DataTypes.STRING,
      beatport: DataTypes.STRING,
      mixcloud: DataTypes.STRING,
      youtube: DataTypes.STRING,
      club_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Dj",
    }
  );
  return Dj;
};
