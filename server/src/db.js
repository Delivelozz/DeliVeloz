require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT, DB_URL } =
  process.env;

//° CONEXION A LA BASE DE DATOS
let sequelize = undefined;

if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(DB_URL, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false,
    dialectOptions: { ssl: { require: true } }, // lets Sequelize know we can use pg-native for ~30% more speed
  });
} else {
  sequelize = new Sequelize(
    `${DB}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
  );
}

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
// AQUI!
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring cambio

const {
  CategoryProduct,
  PaymentMethod,
  Order,
  Product,
  User,
  Assessment,
  Administrator,
  Role,
  SubCategoryProduct,
  Cart,
  CartProduct,
  OrderProduct,
  Banners,
} = sequelize.models;
// Definir el modelo CartProduct con el campo "cantidad"
// Aca vendrian las relaciones

// Order - Product (muchos a muchos)
Order.belongsToMany(Product, { through: OrderProduct, timestamps: false });
Product.belongsToMany(Order, { through: OrderProduct, timestamps: false });
// PaymentMethod - Order (uno a uno)
Order.hasOne(PaymentMethod);
PaymentMethod.belongsTo(Order);
// User - Order (uno a muchos)
User.hasMany(Order);
Order.belongsTo(User);
// User - Cart (uno a uno)
User.hasMany(Cart);
Cart.belongsTo(User);
// Cart - Product (muchos a muchos)
Cart.belongsToMany(Product, { through: CartProduct, timestamps: false });
Product.belongsToMany(Cart, { through: CartProduct, timestamps: false });
// SubCategoryProduct - Product (uno a muchos)
SubCategoryProduct.hasMany(Product);
Product.belongsTo(SubCategoryProduct);
// CategoryProduct - SubCategoryProduct (uno a muchos)
CategoryProduct.hasMany(SubCategoryProduct);
SubCategoryProduct.belongsTo(CategoryProduct);
// *User - Address (uno a muchos)
// User.hasMany(Address);
// Address.belongsTo(User);
// User - Assessment (uno a muchos)
User.hasMany(Assessment);
Assessment.belongsTo(User);
//Product - Assessment (uno a muchos)
Product.hasMany(Assessment);
Assessment.belongsTo(Product);
// Administrator / Role (uno a uno)
Administrator.hasOne(Role);
Role.belongsTo(Administrator);
//Banners - Product (uno a uno)
Product.hasOne(Banners);
Banners.belongsTo(Product);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,
  // para importart la conexión { conn } = require('./db.js');
};
