const { where } = require("sequelize");
const { Order, Cart, Product, CartProduct } = require("../../db");

const createOrderController = async ({userId, total}) => {
    const order = await Order.findOne({
        where: {
            userId,
            paid: false,
        }
    });

    if(order){    
        const orderUpdate = await Order.update(
            {
              userId,
              total
            },{ 
                where: {
                    userId: parseInt(userId, 10)
            }
        });

        const orderFind = await Order.findOne({
            where: {
                userId,
                paid: false,
            }
        });

        const userCart = await Cart.findOne({
            where:{ userId : userId },
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
            await orderFind.addProduct(userCartFilter.products[index].id, { through: { quantity: userCartFilter.products[index].quantity } });        
        }

        return userCartFilter;
    }else{
        const newOrder = await Order.create(
            {
              userId,
              total,
            }
          );
      
          const userCart = await Cart.findOne({
              where:{ userId : userId },
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
              await newOrder.addProduct(userCartFilter.products[index].id, { through: { quantity: userCartFilter.products[index].quantity } });        
          }

        return userCartFilter;
    }
};

module.exports = createOrderController;
