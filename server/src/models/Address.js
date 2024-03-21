const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
 module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('address', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },{timestamps: false});
 };