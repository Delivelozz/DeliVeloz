const { Product } = require("../../db.js");

const createUserController = async ({name, description, price, category, image}) => {
    const newProduct = await Product.create({
        name,
        description,
        price,
        category,
        image,
    });

    return newProduct;
    }

module.exports = createUserController;