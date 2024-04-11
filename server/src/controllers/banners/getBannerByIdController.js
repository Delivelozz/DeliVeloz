const {Banners}= require ("../../db")

const getBannerByIdController=async (id)=>{
    const bannerIdDb= await Banners.findByPk(id)
    return bannerIdDb
}

module.exports= getBannerByIdController