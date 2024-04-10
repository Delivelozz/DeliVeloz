const patchBannersController = require ("../../controllers/banners/patchBannersController")

const patchBannersHandler = async (req, res) => {
    const id = req.params
    const bannersData= req.body
    try {
        const response = await patchBannersController(id, bannersData);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = patchBannersHandler