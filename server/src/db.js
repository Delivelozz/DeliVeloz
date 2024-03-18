require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_PORT
} = process.env;

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
const { Categorias, Direccion, Inventario, Metodopago, Pedido, Producto, Restaurante, Usuario, Valoracion  } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Pedido.belongsToMany(Producto, { through: 'PedidoProducto', timestamps: false });
Producto.belongsToMany(Pedido, { through: 'PedidoProducto', timestamps: false });

// Metodopago.hasMany(Pedido, {foreignKey: 'clubId'});
// Pedido.belongsTo(Metodopago);

Pedido.belongsTo(Metodopago, {
  foreignKey: 'metodoPagoId', // Asegúrate de que este nombre coincida con el nombre de tu clave foránea en la tabla de Pedido
  as: 'metodoPago' // Esto es opcional, pero te permite acceder a la relación como pedido.metodoPago
 });
 
 // Y en tu modelo MetodoPago, agrega la relación inversa:
 Metodopago.hasMany(Pedido, {
  foreignKey: 'metodoPagoId', // Asegúrate de que este nombre coincida con el nombre de tu clave foránea en la tabla de Pedido
  as: 'pedidos' // Esto es opcional, pero te permite acceder a todos los pedidos asociados a un metodo de pago como metodoPago.pedidos
 });

// Pedido.belongsTo(Restaurante);
// Restaurante.hasMany(Pedido);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, 
     // para importart la conexión { conn } = require('./db.js');
};
