// const { Assessment } = require("../../db");

// const getAssessmentController = async (productId) => {
//     const assessmentDB= await Assessment.findAll({
//       where: {
//         productId:productId,
//       }
//     })
    
//     if (assessmentDB.length===0) {
//       return {};
//     }
//     return assessmentDB;
  
// };

// module.exports = getAssessmentController;


const { Assessment, User } = require("../../db");

const getAssessmentController = async (productId) => {
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

    return assessmentsWithUserNames;
};

module.exports = getAssessmentController;