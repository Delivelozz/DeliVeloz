const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pedido', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fecha_hora: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    estado_pedidio: {
      type: DataTypes.ENUM('pendiente', 'en preparacion', 'entregado'),
      allowNull: false,
    }
  }, 
  {timestamps: false});
};