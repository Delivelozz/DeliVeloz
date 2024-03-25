const { DataTypes, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('categoryProduct', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subcategory: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
         return JSON.parse(this.getDataValue('subcategory'));
      },
      set(val) {
         this.setDataValue('subcategory', JSON.stringify(val));
      }
     }
  },{timestamps: false});
};
