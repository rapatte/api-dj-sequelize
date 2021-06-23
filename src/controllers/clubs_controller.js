const { Club } = require("../models");
const { BadRequestError } = require("../helpers/errors")

const clubsController = {
  getAllClubs: async () => {
    const clubs = Club.findAll({
      order: [["name", "ASC"]],
      attributes: ["name"],
      raw: true,
    });
    return clubs;
  },
  getClub: async (name) => {
    // Your code here
    return {};
  },
  addClub: async (data) => {
    const { name } = data;
    const club = await Club.findOne({
      where: {
        name,
      },
    });
    if (club) {
      throw new BadRequestError("")
    }
    return {};
  },
};

module.exports = clubsController;
