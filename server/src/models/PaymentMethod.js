const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('paymentMethod', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    number:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  });
};
