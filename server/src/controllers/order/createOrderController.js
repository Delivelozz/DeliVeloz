const { Order, Cart, Product, CartProduct, OrderProduct } = require("../../db");

const createOrderController = async ({idUser, total}) => {
    const order = await Order.findAll({
        where: {
            userId: idUser
        }
    }); 
    if(order.length > 0){
        if(order[order.length - 1].paid === false){
            const orderUpdate = order[order.length - 1];
            await orderUpdate.update(
                {
                    userId: idUser,
                    total
                })
            const orderProduct = await Order.findByPk(orderUpdate.id, {
                include: [
                    {
                        model: Product,
                        through: { 
                            model: OrderProduct,
                            attributes: ['quantity']
                        },
                        attributes: ['id', 'name']
                    }
                ]
            })
            for (let index = 0; index < orderProduct.products.length; index++) {
                await orderProduct.removeProduct(orderProduct.products[index].id);
            }
            return orderProduct;
        }else{
            const orderNew = await Order.create(
                {
                    userId: idUser,
                    total
                }
            )

            const userCart = await Cart.findOne({
                where:{ userId : idUser },
                include: [
                    {
                        model: Product,
                        through: { 
                            model: CartProduct,
                            attributes: ['quantity']
                        },
                        attributes: ['id']
                    }
                ]
            })
            const userCartProducts = userCart.products.map(product => (
                {
                    id: product.id,
                    quantity: product.cartProduct.quantity,
                }
            ))  
            const userCartFilter = {
                id: userCart.id,
                products: userCartProducts
            };
    
            for (let index = 0; index < userCartFilter.products.length; index++) {
                await orderNew.addProduct(userCartFilter.products[index].id, { through: { quantity: userCartFilter.products[index].quantity } });        
            }
    
            const orderProduct = await Order.findByPk(orderNew.id, {
                include: [
                    {
                        model: Product,
                        through: { 
                            model: OrderProduct,
                            attributes: ['quantity']
                        },
                        attributes: ['id', 'name']
                    }
                ]
            })
    
            return orderProduct;
        }
    }else{
        const orderNew = await Order.create(
            {
                userId: idUser,
                total
            }
        )
        const userCart = await Cart.findOne({
            where:{ userId : idUser },
            include: [
                {
                    model: Product,
                    through: { 
                        model: CartProduct,
                        attributes: ['quantity']
                    },
                    attributes: ['id']
                }
            ]
        })
        const userCartProducts = userCart.products.map(product => (
            {
                id: product.id,
                quantity: product.cartProduct.quantity,
            }
        ))  
        const userCartFilter = {
            id: userCart.id,
            products: userCartProducts
        };

        for (let index = 0; index < userCartFilter.products.length; index++) {
            await orderNew.addProduct(userCartFilter.products[index].id, { through: { quantity: userCartFilter.products[index].quantity } });        
        }

        const orderProduct = await Order.findByPk(orderNew.id, {
            include: [
                {
                    model: Product,
                    through: { 
                        model: OrderProduct,
                        attributes: ['quantity']
                    },
                    attributes: ['id', 'name']
                }
            ]
        })

        return orderProduct;
    }
};

module.exports = createOrderController;
