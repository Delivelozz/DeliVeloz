// categoriesAndSubcategories.js
const axios = require("axios");
const { Banners } = require("../db.js");


const fetchBanners = async () => {
 const endPointBanner = "https://delivelozapi.onrender.com/banner";
 const { data: bannersData } = await axios.get(endPointBanner);
 // Iteramos sobre cada categoría y sus subcategorías
    // Iteamos primero sobre las categorias
    for (const banner of bannersData) {
      //Buscar la categoría por nombre para ver si existe
      let existingBanner = await Banners.findOne({ 
        where: { title: banner.title } 
      });
      // Si no existe, crearla en la base de datos
      if (!existingBanner) {
        existingBanner = await Banners.create({ 
          title: banner.title,
          description: banner.description,
          image: banner.image,
        });
      }
    }
    console.log("Banners añadidos correctamente");
};

module.exports = { fetchBanners };