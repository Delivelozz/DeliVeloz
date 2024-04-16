const {Order}= require("../../db");

const updateOrderController = async ({addresDelvery, idPedido, idUser, statusOrder, paid})=>{
 
    const orderAddress = await Order.findOne({
        where:{
            id: idPedido,
            userId: idUser,
        }
    })

    await orderAddress.update({
        deliveryAddress: addresDelvery,
        orderStatus: statusOrder,
        paid
    })

    return orderAddress;
}

module.exports=updateOrderController;