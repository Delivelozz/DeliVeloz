import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShoppingCart } from "../../redux/actions/actions.js";
import { useShoppingCartDelete } from "../../hooks/useShoppingCartDelete.js";
import { useShoppingCartAdd } from "../../hooks/useShoppingCartAdd.js";
import { Link } from "react-router-dom";

const shoppingCartCard = ({ id, name, price, image, qty, priceTotal }) => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  console.log(shoppingCart);

  const deleteFromCart = useShoppingCartDelete();
  const handleDelete = () => {
    deleteFromCart(id, price);
  };

  const addToCart = useShoppingCartAdd();
  const handleAdd = () => {
    addToCart(id, name, price, priceTotal);
  };

  const deleteItem = (id) => {
    const dataItem = { id, name, price, image, qty: 1, priceTotal: price };
    const addRes = [...shoppingCart];
    //console.log(addRes);
    const existingItem = addRes.find((item) => item.id == id);
    //console.log(existingItem);
    if (existingItem) {
      const index = addRes.findIndex((item) => item.id == id);
      addRes.splice(index, 1);
    }
    //console.log(addRes);
    dispatch(setShoppingCart(addRes));
  };

  return (
    <article id={id} className="w-full h-36 ">
      <div className="w-full h-36 flex   justify-between bg-white rounded-lg border p-4 relative">
        <div className="flex">
          <Link to={`/detail/${id}`}>
            <figure className="w-28 h-28 mr-3 rounded-md cursor-pointer hover:text-black">
              <img
                src={image}
                alt={name}
                className="w-28 h-28 mx-auto rounded-md object-cover"
              />
            </figure>
          </Link>
          <div className=" flex flex-col justify-center align-center gap-1">
            <p className="text-sundown-500 font-semibold">{name}</p>
            <p>Precio unitario: ${price}</p>
            <div className="h-8 flex items-center gap-1">
              <p>Cantidad: </p>
              <button
                onClick={handleDelete}
                className="w-6 h-6 bg-sundown-500 rounded-md text-white"
              >
                -
              </button>
              <input
                type="text"
                value={qty}
                className="border border-sundown-500 border-solid rounded-md w-8 h-6 text-center "
              />
              <button
                onClick={handleAdd}
                className="w-6 h-6 bg-sundown-500 rounded-md text-white"
              >
                +
              </button>
            </div>
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
