const getSubCategoriesController = require('../../controllers/subcategories/getSubCategoriesController');
// Devuelve todas las subcategorias de la BDD
const getSubCategoriesHandler = async (req, res) => {
    try {
        const response = await getSubCategoriesController();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getSubCategoriesHandler;