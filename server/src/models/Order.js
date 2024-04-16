const { DataTypes } = require('sequelize');
const { defaultValueSchemable } = require('sequelize/lib/utils');
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
      type: DataTypes.ENUM('pending', 'in preparation', 'delivered', 'on the way'),
      allowNull: false,
      defaultValue: 'pending',
    },    
    total: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
    }
  },{timestamps: false});
};