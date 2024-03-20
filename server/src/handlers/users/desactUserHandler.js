const desactUserHandler = async (req, res) => {

    try {
        const response = "Prueba"
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};


module.exports = desactUserHandler;