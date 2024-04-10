const postBannersController = require ("../../controllers/banners/postBannersController")

const postBannersHandler = async (req, res)=>{
    const banner =req.body
    try {
        const postBanner= await postBannersController(banner)
        res.status(200).json(postBanner)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports= postBannersHandler