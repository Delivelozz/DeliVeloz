const getProductsByNameController = require('../../controllers/products/getProductsByNameController');
const getProductsAllController = require('../../controllers/products/getProductsAllController');
// Devuelve todos los Usuarios o los Usuarios por nombre
const getProductsHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if(name){
            const allProductsByName = await getProductsByNameController(name);
            if(allProductsByName.length === 0){
                throw new Error(`No se encontro ningun producto con nombre: ${name}`)
            }
            res.status(200).json(allProductsByName);
        }else{
            const allProducts = await getProductsAllController();
            res.status(200).json(allProducts);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getProductsHandler;