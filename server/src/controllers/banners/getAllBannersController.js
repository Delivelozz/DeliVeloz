const {Banners} = require ("../../db")

const getAllBannersController= async ()=>{

    const bannersDb= await Banners.findAll()
    return bannersDb
}

module.exports= getAllBannersController
