const { DataTypes }= require ("sequelize")
 module.exports= (sequelize)=>{
    const Direccion= sequelize.define( "direccion",{
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
        }, {
          timestamps: true
        });

    
    return Direccion;
 }