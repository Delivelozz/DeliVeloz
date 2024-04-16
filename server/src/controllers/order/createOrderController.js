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
                await orderProduct.removeProduct(orderProduct.products[index]);
            }
            const orderProductPrueb = await Order.findByPk(orderUpdate.id, {
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
                await orderProductPrueb.addProduct(userCartFilter.products[index].id, { through: { quantity: userCartFilter.products[index].quantity } });        
            }

            const orderProductPrueb2 = await Order.findByPk(orderUpdate.id, {
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

            return orderProductPrueb2;
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

//! NO BORRAR; MIRAR EL CODIGO, MEJORAR EL DE ARRIBA

// const createOrderController = async ({idUser, total}) => {
//     const lastOrder = await Order.findOne({
//         where: { userId: idUser },
//         order: [['createdAt', 'DESC']]
//     });

//     if (lastOrder && !lastOrder.paid) {
//         await lastOrder.update({ total });
//         await lastOrder.setProducts([]);

//         const userCart = await Cart.findOne({
//             where: { userId: idUser },
//             include: [{
//                 model: Product,
//                 through: { model: CartProduct, attributes: ['quantity'] },
//                 attributes: ['id']
//             }]
//         });

//         const productsToAdd = userCart.products.map(product => ({
//             id: product.id,
//             through: { quantity: product.cartProduct.quantity }
//         }));

//         await lastOrder.setProducts(productsToAdd);

//         return await Order.findByPk(lastOrder.id, {
//             include: [{
//                 model: Product,
//                 through: { model: OrderProduct, attributes: ['quantity'] },
//                 attributes: ['id', 'name']
//             }]
//         });
//     } else {
//         const newOrder = await Order.create({ userId: idUser, total });

//         const userCart = await Cart.findOne({
//             where: { userId: idUser },
//             include: [{
//                 model: Product,
//                 through: { model: CartProduct, attributes: ['quantity'] },
//                 attributes: ['id']
//             }]
//         });

//         const productsToAdd = userCart.products.map(product => ({
//             id: product.id,
//             through: { quantity: product.cartProduct.quantity }
//         }));

//         await newOrder.setProducts(productsToAdd);

//         return await Order.findByPk(newOrder.id, {
//             include: [{
//                 model: Product,
//                 through: { model: OrderProduct, attributes: ['quantity'] },
//                 attributes: ['id', 'name']
//             }]
//         });
//     }
// };

// module.exports = createOrderController;