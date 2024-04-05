import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShoppingCart } from "../../redux/actions/actions.js";

const shoppingCartCard = (props) => {
  const { id, name, price, image, qty, priceTotal } = props;
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    const dataItem = { id, name, price, image, qty: 1, priceTotal: price };
    const addRes = [...shoppingCart];
    //console.log(addRes);
    const existingItem = addRes.find((item) => item.id === id);
    //console.log(existingItem);
    if (existingItem) {
      if (existingItem.qty > 1) {
        existingItem.qty -= 1;
        existingItem.priceTotal = parseFloat(
          (existingItem.priceTotal - parseFloat(price)).toFixed(2)
        );
      } else {
        const index = addRes.findIndex((item) => item.id === id);
        addRes.splice(index, 1);
      }
    }
    //console.log(addRes);
    dispatch(setShoppingCart(addRes));
  };

  return (
    <article id={id} className="w-full h-36 ">
      <div className="w-full h-36 flex   justify-between bg-white rounded-lg border p-4 relative">
        <div className="flex">
          <figure className="w-28 h-28 mr-3 rounded-md cursor-pointer hover:text-black">
            <img
              src={image}
              alt={name}
              className="w-28 h-28 mx-auto rounded-md object-cover"
            />
          </figure>
          <div className=" flex flex-col justify-center align-center ">
            <p className="text-sundown-500 font-semibold">{name}</p>
            <p>Cantidad: {qty}</p>
            <p>Precio unitario: ${price}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center align-center text-sundown-500 font-bold">
          <p>Precio total: ${priceTotal}</p>
        </div>
        <button
          onClick={() => deleteItem(id)}
          className="cursor-pointer absolute top-0 right-0 flex justify-center items-center bg-sundown-500 w-8 h-8 rounded-full text-white font-semibold -mr-3 -mt-3 "
        >
          X
        </button>
      </div>
    </article>
  );
};

export default shoppingCartCard;
