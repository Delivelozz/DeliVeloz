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
// Para relacionarlos hacemos un destructuring cambio
const { CategoryProduct, Address, Stock, PaymentMethod, Order, Product, User, Assessment  } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

// Order - PRUDUCTO (muchos a muchos)
Order.belongsToMany(Product, { through: 'OrderProduct', timestamps: false });
Product.belongsToMany(Order, { through: 'OrderProduct', timestamps: false });
// METODO DE PAGO - Order (uno a muchos)
PaymentMethod.hasMany(Order);
Order.belongsTo(PaymentMethod);
// User - Order (uno a muchos)
User.hasMany(Order);
Order.belongsTo(User);
// Stock - PRUDUCTO (uno a muchos)
Stock.hasMany(Product);
Product.belongsTo(Stock);
// CategoryProduct - PRUDUCTO (uno a muchos)
CategoryProduct.hasMany(Product);
Product.belongsTo(CategoryProduct);
// Address - User (uno a muchos)
Address.hasMany(User);
User.belongsTo(Address);
// Assessment - User (uno a muchos)
Assessment.hasMany(User);
User.belongsTo(Assessment);
// Pedido.belongsTo(Metodopago, { foreignKey: 'metodopagoId' });
// Metodopago.hasMany(Pedido, { foreignKey: 'metodopagoId' });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, 
     // para importart la conexión { conn } = require('./db.js');
};
