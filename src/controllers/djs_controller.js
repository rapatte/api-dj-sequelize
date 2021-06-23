// const { pick } = require("lodash");
// const { Dj, Musicalgenre, DjMusicalgenre } = require("../models");
// const { NotFoundError } = require("../helpers/errors");
const { Dj } = require("../models");

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
    const djsName = await dj.find
    return {};
  },

  addDj: async (data) => {
    // Your code here
    return {};
  },

  updateDj: async (name, data) => {
    // Your code here
    return {};
  },

  deleteDj: async (name) => {
    // Your code here
    return {};
  },
};

module.exports = djsController;
