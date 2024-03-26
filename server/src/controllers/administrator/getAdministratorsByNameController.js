const {Administrator} = require('../../db')
const { Op, Sequelize} = require('sequelize')

const getAdministratorByName = async (name) => {
  const allAdministratorByName = await Administrator.findAll({
    where: {
      name: {
        [Op.like]: Sequelize.literal(`LOWER('%${name}%')`),
      },
    },
  });
  const allAdministratorByLastname = await User.findAll({
    where: {
      lastName: {
        [Op.like]: Sequelize.literal(`LOWER('%${name}%')`),
      },
    },
  });

  return [...allAdministratorByName, ...allAdministratorByLastname];
};

module.exports = getAdministratorByName;


