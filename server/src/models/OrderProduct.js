const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('orderProduct', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1 
    },
  },{timestamps: false});
};