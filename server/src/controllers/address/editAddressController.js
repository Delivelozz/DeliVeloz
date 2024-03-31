const { Address } = require("../../db.js");

const editAddressController = async (addressId, updatedData) => {
    // lógica para editar la dirección con el ID 
    const address = await Address.findByPk(addressId);
    if (!address) {
        throw new Error('Dirección no encontrada');
    }

    // Actualizamos los datos de la dirección
    await address.update(updatedData);

    return { message: 'Dirección editada correctamente' };
};

module.exports = editAddressController;
