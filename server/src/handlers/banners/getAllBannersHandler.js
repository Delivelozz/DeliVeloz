const getAllBannersController = require ("../../controllers/banners/getAllBannersController")

const getAllBannersHandler= async (req, res) => {
    try {
        const allBanners= await getAllBannersController()
        if (allBanners.length===0){
            throw new Error ("No hay banners posteados")
        } else{

            res.status(200).json(allBanners)
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports= getAllBannersHandler