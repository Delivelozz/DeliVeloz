const editProductController = require('../../controllers/products/editProductController.js');

// Maneja la edicion de los datos del Usuario en la Base de Datos
const editProductHandler = async (req, res) => {
    //obtenemos el id del usuario por params
    const id = req.params;
    //obtenemos los nuevos datos del usuario por body
    const dataProduct = req.body;
    try {
        const response = await editProductController(id, dataProduct);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


module.exports = editProductHandler;