const getBannersByIdController= require ("../../controllers/banners/getBannersByIdController")

const getBannersByIdHandler= async (req, res)=>{
    const {id}=req.params
    try {
        const bannerId= await getBannersByIdController(id)
        if(!bannerId){
            res.status(404).json({error: "No se encontro el banner por Id"})
        } else {
            res.status(200).json(bannerId)
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getBannersByIdHandler