const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DjMusicalGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  DjMusicalGenre.init(
    {
      id: DataTypes.UUID,
      dj_id: DataTypes.UUID,
      musicalgenre_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "DjMusicalGenre",
    }
  );
  return DjMusicalGenre;
};
