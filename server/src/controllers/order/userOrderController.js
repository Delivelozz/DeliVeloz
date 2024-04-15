const { User }=require("../../db");

const userOrderController = async (idUser) =>{
    const user = await User.findOne({
        where: {userId: idUser}
    })
    return user;
}

module.exports= userOrderController;