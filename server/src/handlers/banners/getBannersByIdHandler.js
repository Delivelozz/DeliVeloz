const getBannerByIdController= require ("../../controllers/banners/getBannerByIdController")

const getBannerByIdHandler= async (req, res)=>{
    const {id}=req.params
    try {
        const bannerId= await getBannerByIdController(id)
        if(!bannerId){
            res.status(404).json({error: "No se encontro el banner por Id"})
        }
        res.status(200).json(bannerId)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getBannerByIdHandler