const createCategoryController = require('../../controllers/categories/createCategoryController');
// Devuelve la nueva categoria
const createCategoryHandler = async (req, res) => {
    const data = req.body;
    try {
        const response = await createCategoryController(data);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = createCategoryHandler;