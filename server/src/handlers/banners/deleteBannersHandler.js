const deleteBannersController = require ("../../controllers/banners/deleteBannersController")

const deleteBannersHandler = async (req, res) => {
    try {
        const {id} = req.params
        const response= await deleteBannersController(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
module.exports = deleteBannersHandler