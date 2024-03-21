const {Usuario} = require('../../db');

const desactUserController = async (id, value) =>{
  const user = await Usuario.findOne({ where: { id: parseInt(id, 10) } });
  user.active = value;
  await user.save();
  return { message: 'Usuario actualizado exitosamente' };
}

module.exports = desactUserController