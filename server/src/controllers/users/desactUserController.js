const {User} = require('../../db');

const desactUserController = async (id, value) =>{
  const user = await User.findOne({ where: { id: parseInt(id, 10) } });
  user.active = value;
  const date = value === 'true' ? 'activado' : 'desactivado';
  await user.save();
  return { message: `Usuario ${date} exitosamente` };
}

module.exports = desactUserController