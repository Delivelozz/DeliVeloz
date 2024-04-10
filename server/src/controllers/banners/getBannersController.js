const {Banners} = require ("../../db")

const getBannersController= async ()=>{
    const lastSixBanners = await Banners.findAll({
        order: [["id", "DESC"]],
        limit: 6
    })
    if (lastSixBanners.length < 6){
        return { message: "hay menos de 6 registros " };
    } else {
        return lastSixBanners
    }
}

module.exports= getBannersController