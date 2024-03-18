const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('producto', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: true
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    disponibilidad: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    timestamps: false,
  });
};