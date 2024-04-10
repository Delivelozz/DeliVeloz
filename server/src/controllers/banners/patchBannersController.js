const {Banners} = require ("../../db")

const patchBannersController = async ({id}, {title, description, image}) => {
    const patchBanner= await Banners.update({
        title, 
        description,
        image
    },{
        where: {
            id: parseInt(id, 10)
        }
    })
    if(patchBanner){
        return {message: "Banner actualizado exitosamente"}
    } else {
        return {message: "No se encontro el banner o no se hizo la actualizacion"}
    }
};

module.exports= patchBannersController