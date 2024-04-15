const getAllBannersController = require ("../../controllers/banners/getAllBannersController")

const getAllBannersHandler= async (req, res) => {
    try {
        const allBanners= await getAllBannersController()
        res.status(200).json(allBanners)
    } catch (error) {
        res.status(500).json({error: message.error})
    }
}

module.exports= getAllBannersHandler