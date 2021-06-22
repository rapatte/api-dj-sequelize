const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Dj extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Club);
      this.belongsTo(models.MusicalGenres, {
        through: "DjMusicalGenre",
        foreignKey: "dj_id",
        as: "musical_genres",
      });
    }
  }
  Dj.init(
    {
      id: DataTypes.UUID,
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
