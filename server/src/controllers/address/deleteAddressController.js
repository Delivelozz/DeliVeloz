const { Address } = require("../../db.js");

const deleteAddressController = async (addressId) => {
    //lógica para eliminar la dirección con el ID 
    const address = await Address.findByPk(addressId);
    if (!address) {
        throw new Error('Dirección no encontrada');
    }

    await address.destroy();

    return { message: 'Dirección eliminada correctamente' };
};

module.exports = deleteAddressController;
