const { User } = require("../../db");

const userOrderController = async (idUser) => {
  const user = await User.findByPk(idUser);
  return user;
};

module.exports = userOrderController;
