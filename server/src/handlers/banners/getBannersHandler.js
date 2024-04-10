const getBannersController = require ("../../controllers/banners/getBannersController")

const getBannersHandler = async (req, res)=> {
    try {
        const getBanners = await getBannersController()
        res.status(200).json(getBanners)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = getBannersHandler