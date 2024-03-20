const getUsersByNameControllerDB = require('../../controllers/videogames/getVideogameByNameControllerDB');
const getVideogamesControllerDB = require('../../controllers/videogames/getVideogamesControllerDB');
// Devuelve todos los videogames o el videogame por nombre
const getVideogamesHandler = async (req, res) => {
    const {name} = req.query;
    try {
        if(name){
            const videogamesByNameAPI = await getVideogameByNameControllerAPI(name);
            const videogamesByNameDB = await getVideogameByNameControllerDB(name);
            if(videogamesByNameAPI.length === 0 && videogamesByNameDB.length === 0){
                throw new Error(`No se encontro ningun videojuego con nombre: ${name}`)
            }
            const videogameByName = [...videogamesByNameDB, ...videogamesByNameAPI];
            const videogameByName15 = videogameByName.slice(0, 15);
            res.status(200).json(videogameByName15);
        }else{
            const allVideogamesAPI = await getVideogamesControllerAPI();
            const allVideogamesDB = await getVideogamesControllerDB();
            const allVideogames = [...allVideogamesDB, ...allVideogamesAPI];
            res.status(200).json(allVideogames);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = getVideogamesHandler;