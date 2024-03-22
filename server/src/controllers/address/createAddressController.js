const { Address } = require("../../db.js");

const createAddressController = async ({ deliveryAddress, city, country }) => {
  const newAddress = await Address.create({
    deliveryAddress,
    city,
    country,
  });

  return newAddress;
};

module.exports = createAddressController;
