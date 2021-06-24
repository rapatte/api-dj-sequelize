/* eslint-disable camelcase */
// const { pick } = require("lodash");
// const { Dj, Musicalgenre, DjMusicalgenre } = require("../models");
// const { NotFoundError } = require("../helpers/errors");
const { BadRequestError, NotFoundError } = require("../helpers/errors");
const { Dj, Club } = require("../models");

const djsController = {
  getAllDjs: async () => {
    const djs = await Dj.findAll({
      order: [["name", "ASC"]],
      attributes: [
        "url_name",
        "name",
        "biography",
        "soundcloud",
        "facebook",
        "instagram",
        "spotify",
        "beatport",
        "mixcloud",
        "youtube",
      ],
      raw: true,
    });
    return djs;
  },

  getDj: async (name) => {
    const dj = await Dj.findOne({
      where: {
        name,
      },
      attributes: ["id", "name"],
      raw: true,
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
