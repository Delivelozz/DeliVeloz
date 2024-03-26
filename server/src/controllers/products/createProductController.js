const { Product, SubCategoryProduct } = require("../../db.js");

const createUserController = async ({name, description, price, category, subCategory, image}) => {

    const subcategory = await SubCategoryProduct.findOne({ where: { name: subCategory } });

    const newProduct = await Product.create({
        name,
        description,
        price,
        category,
        subCategory,
        image,
        subCategoryProductId: subcategory.id,
    });

    return newProduct;
    }

module.exports = createUserController;