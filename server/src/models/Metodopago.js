const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('metodopago', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    number:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  });
};
