const filterSubCategoryController = async (results, subcategory) => {
    //  productos por categoría
    const productosFiltrados = results.filter(product => product.subCategory === subcategory);
    return productosFiltrados;
};

module.exports = filterSubCategoryController;