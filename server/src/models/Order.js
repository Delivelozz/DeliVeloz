const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('order', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderStatus: {
      type: DataTypes.ENUM('pending', 'in preparation', 'delivered'),
      allowNull: false,
    },    
  },{timestamps: false});
};