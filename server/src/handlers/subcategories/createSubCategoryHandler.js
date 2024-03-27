const createSubCategoryController = require('../../controllers/subcategories/createSubCategoryController');
// Devuelve la nueva categoria
const createSubCategoryHandler = async (req, res) => {
    const data = req.body;
    try {
        const response = await createSubCategoryController(data);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = createSubCategoryHandler;