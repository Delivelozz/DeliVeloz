const { Product, SubCategoryProduct } = require("../../db.js");

const createUserController = async ({name, description, price, subCategory, image}) => {

    const subcategory = await SubCategoryProduct.findOne({ where: { name: subCategory } });

    const newProduct = await Product.create({
        name,
        description,
        price,
        subCategory,
        image,
        subCategoryProductId: subcategory.id,
    });

    return newProduct;
    }

module.exports = createUserController;