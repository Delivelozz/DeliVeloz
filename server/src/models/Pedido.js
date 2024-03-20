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
    },
    // metodopagoId: { // Nueva columna para la clave foránea
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'metodopago', // nombre del modelo al que hace referencia
    //     key: 'id',
    //   },
    //   allowNull: false,
    // }
  }, 
  {timestamps: false});
};