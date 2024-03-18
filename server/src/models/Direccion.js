const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
 module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('direccion', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
      direccion_entrega: {
          type: DataTypes.STRING,
          allowNull: true
        },
        ciudad: {
          type: DataTypes.STRING,
          allowNull: true
        },
        pais: {
          type: DataTypes.STRING,
          allowNull: true
        }
      },{timestamps: false});
 };