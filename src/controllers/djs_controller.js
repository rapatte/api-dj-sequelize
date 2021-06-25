/* eslint-disable camelcase */
// const { pick } = require("lodash");
const { BadRequestError, NotFoundError } = require("../helpers/errors");
const { Dj, Club, Musicalgenre, DjMusicalgenre } = require("../models");

const djsController = {
  getAllDjs: async () => {
    const djs = await Dj.findAll({
      order: [["name", "ASC"]],
      attributes: { exclude: ["createdAt", "updatedAt", "club_id"] },
      include: [
        {
          model: Club,
          as: "clubs",
          attributes: ["name"],
        },
        {
          model: Musicalgenre,
          as: "musical_genres",
          through: { attributes: [] },
        },
      ],
    });
    return djs;
  },

  getDj: async (name) => {
    const dj = await Dj.findOne({
      where: {
        name,
      },
      attributes: { exclude: ["createdAt", "updatedAt", "club_id"] },
      include: [
        {
          model: Club,
          attributes: ["name"],
          as: "clubs",
        },
      ],
    });
    if (!dj) {
      throw new NotFoundError("Ressource introuvable", "Ce dj n'existe pas");
    }
    return dj;
  },

  addDj: async (data) => {
    const { name, club_id } = data;
    const dj = await Dj.findOne({
      where: {
        name,
      },
    });
    if (dj) {
      throw new BadRequestError("Ressource existante", "Ce dj existe déjà");
    }
    const club = await Club.findOne({
      where: {
        id: club_id,
      },
    });
    if (!club) {
      throw new NotFoundError("Ressource introuvable", "Ce club n'existe pas");
    }
    const newDj = await Dj.create(data);
    const musicalGenre = await Musicalgenre.findOne({
      where: {
        name: data.musical_genres[0],
      },
    });
    if (!musicalGenre) {
      throw new NotFoundError(
        "Ressource introuvable",
        "Ce genre de musique n'existe pas"
      );
    }
    await DjMusicalgenre.create({
      dj_id: newDj.id,
      musicalgenre_id: musicalGenre.id,
    });
    return newDj;
  },

  // updateDj: async (name, data) => {
  //   // Your code here
  //   return {};
  // },

  // deleteDj: async (name) => {
  //   // Your code here
  //   return {};
  // },
};

module.exports = djsController;
