const { Product, SubCategoryProduct } = require("../../db.js");

const createUserController = async ({name, description, price, category, subCategory, image, quantity}) => {

    const subcategory = await SubCategoryProduct.findOne({ where: { name: subCategory } });

    const newProduct = await Product.create({
        name,
        description,
        price,
        category,
        subCategory,
        image,
        subCategoryProductId: subcategory.id,
        quantity
    });

    return newProduct;
    }

module.exports = createUserController;