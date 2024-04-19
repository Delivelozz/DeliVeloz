const getProductsActiveByNameController = require('../../controllers/products/getProductsActiveByNameController');
const getProductsAllActiveController = require('../../controllers/products/getProductsAllActiveController');
// Devuelve todos los Usuarios o los Usuarios por nombre
const getProductsActiveHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if(name){
            const allProductsByName = await getProductsActiveByNameController(name);
            if(allProductsByName.length === 0){
                throw new Error(`No se encontro ningun producto con nombre: ${name}`)
            }
            res.status(200).json(allProductsByName);
        }else{
            const allProducts = await getProductsAllActiveController();
            res.status(200).json(allProducts);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getProductsActiveHandler;