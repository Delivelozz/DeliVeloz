const { Product } = require("../../db.js");

const filterCategoryController = async (category) => {
    //  productos por categoría
    const productos = await Product.findAll({ where: {category, availability: true} });
    return productos;
};

module.exports = filterCategoryController;
