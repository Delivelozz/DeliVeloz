const deleteCategoryController = require('../../controllers/categories/deleteCategoryController');
// Devuelve todas las categorias de la BDD
const deleteCategoryHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const categoryDelete = await deleteCategoryController(id);
        res.status(200).json(categoryDelete);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = deleteCategoryHandler;