const deleteSubCategoryController = require('../../controllers/subcategories/deleteSubCategoryController');
// Devuelve todas las categorias de la BDD
const deleteSubCategoryHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await deleteSubCategoryController(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = deleteSubCategoryHandler;