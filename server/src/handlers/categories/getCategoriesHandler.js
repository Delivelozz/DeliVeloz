const getCategoriesController = require('../../controllers/categories/getCategoriesController');
// Devuelve todas las categorias de la BDD
const getCategoriesHandler = async (req, res) => {
    try {
        const allCategoriesDB = await getCategoriesController();
        res.status(200).json(allCategoriesDB);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getCategoriesHandler;