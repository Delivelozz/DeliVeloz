const desactProductController = require('../../controllers/products/desactProductController');

const desactProductHandler = async (req, res) => {
    const { id, value } = req.params;
    try {
        //Faltaba el await xD 
        const response = await desactProductController(id, value);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


module.exports = desactProductHandler;