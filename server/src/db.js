require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_PORT
} = process.env;

//° CONEXION A LA BASE DE DATOS
const sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/deliveloz`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
// AQUI!
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Categoria, Direccion, Inventario, Metodopago, Pedido, Producto, Restaurante, Usuario, Valoracion  } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

// PEDIDO - PRUDUCTO (muchos a muchos)
Pedido.belongsToMany(Producto, { through: 'PedidoProducto', timestamps: false });
Producto.belongsToMany(Pedido, { through: 'PedidoProducto', timestamps: false });
// METODO DE PAGO - PEDIDO (uno a muchos)
Metodopago.hasMany(Pedido);
Pedido.belongsTo(Metodopago);
// USUARIO - PEDIDO (uno a muchos)
Usuario.hasMany(Pedido);
Pedido.belongsTo(Usuario);
// RESTAURANTE - PEDIDO (uno a muchos)
Restaurante.hasMany(Pedido);
Pedido.belongsTo(Restaurante);
// RESTAURANTE - INVENTARIO (uno a uno)
Restaurante.hasOne(Inventario);
Inventario.belongsTo(Restaurante);
// INVENTARIO - PRUDUCTO (uno a muchos)
Inventario.hasMany(Producto);
Producto.belongsTo(Inventario);
// CATEGORIA - PRUDUCTO (uno a muchos)
Categoria.hasMany(Producto);
Producto.belongsTo(Categoria);
// DIRECCION - USUARIO (uno a muchos)
Direccion.hasMany(Usuario);
Usuario.belongsTo(Direccion);
// VALORACION - USUARIO (uno a muchos)
Valoracion.hasMany(Usuario);
Usuario.belongsTo(Valoracion);
// Pedido.belongsTo(Metodopago, { foreignKey: 'metodopagoId' });
// Metodopago.hasMany(Pedido, { foreignKey: 'metodopagoId' });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, 
     // para importart la conexión { conn } = require('./db.js');
};
