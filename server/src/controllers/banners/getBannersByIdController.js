const { Banners } = require("../../db");

const getBannersByIdController = async (id) => {
  const bannerIdDb = await Banners.findByPk(id);
  return bannerIdDb;
};

module.exports = getBannersByIdController;
