const filterCategoryController = require('../../controllers/filters/filterCategoryController')
const orderingPriceController = require('../../controllers/filters/orderingPriceController')
const getProductsAllController = require('../../controllers/products/getProductsAllController');
const filterSubCategoryController = require('../../controllers/subcategories/filterSubCategoryController');

const getFilterHandler = async (req, res) => {
  const {category, subcategory, price} = req.params;
  try {
    let results = category !== "default" ? await filterCategoryController(category) : await getProductsAllController(); 

    if (subcategory !== "default") {
      results = await filterSubCategoryController(results, subcategory);
    }
    // Aplicar el filtro de precio si se especifica y si hay resultados previos
    if (price !== "default" && results) {
      results = orderingPriceController(results, price);
    }
    // Responder con los resultados filtrados
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

module.exports = getFilterHandler;