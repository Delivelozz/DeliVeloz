const deleteAssessmentController= require ("../../controllers/assessments/deleteAssessmentController")

const deleteAssessmentHandler = async (req, res)=>{
    try {
        const {id} = req.params;
        await deleteAssessmentController(id);
        res.status(200).json({message: "Valoración eliminada correctamente"});

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = deleteAssessmentHandler;