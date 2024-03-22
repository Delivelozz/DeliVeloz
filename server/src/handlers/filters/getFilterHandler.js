const filterCategoryController = require('../../controllers/filters/filterCategoryController')
const orderingPriceController = require('../../controllers/filters/orderingPriceController')
const getProductsAllController = require('../../controllers/products/getProductsAllController')

const getFilterHandler = async (req, res) => {
  const {category, price} = req.params;
  try {
    let results = category !== "default" ? await filterCategoryController(category) : await getProductsAllController();
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