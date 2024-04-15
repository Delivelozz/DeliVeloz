const { Assessment, User} = require("../../db");
const { Sequelize } = require("sequelize");

const getAssessmentController = async (productId) => {

    const averageRating = await Assessment.findOne({
        where: {
            productId: productId,
        },
        attributes: [
            [Sequelize.fn('AVG', Sequelize.col('rating')), 'averageRating']
        ],
        raw: true
    });


    const assessmentDB = await Assessment.findAll({
        where: {
            productId: productId,
        }
    });

    if (assessmentDB.length === 0) {
        return {};
    }

    // Para cada comentario, busca el usuario correspondiente y agrega su nombre al objeto
    const assessmentsWithUserNames = await Promise.all(assessmentDB.map(async (assessment) => {
        const user = await User.findOne({
            where: {
                id: assessment.userId,
            }
        });
        
        // Agrega el nombre del usuario al objeto de comentario
        return {
            ...assessment.dataValues,
            userName: user ? user.name : 'Usuario desconocido',
        };
    }));
    
    const allAssesment = {
        averageRating: averageRating ? parseFloat(averageRating.averageRating) : 0,
        assessmentsWithUserNames
    }
    return allAssesment;
};

module.exports = getAssessmentController;