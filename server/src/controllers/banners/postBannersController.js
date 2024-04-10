const {Banners} = require ("../../db")

const postBannersController = async ({title, description, image})=>{
    const newBanner = await Banners.create({
        title, 
        description,
        image
    });
    return newBanner
}

module.exports= postBannersController