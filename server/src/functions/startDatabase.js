const { fetchBanners } = require("./banners.js");
const { fetchCategoriesAndSubcategories } = require("./categoriesAndSubcategories.js");
const { fetchProducts } = require("./products.js");

const startDatabase = async () => {
  try {
    await fetchCategoriesAndSubcategories();
    await fetchProducts();
    await fetchBanners();
    console.log("Datos guardados correctamente");
  } catch (error) {
    console.error("Error al hacer la peticion o guardar los datos: ", error);
  }
};

module.exports = startDatabase;
