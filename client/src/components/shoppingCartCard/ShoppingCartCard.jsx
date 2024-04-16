import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API_URL } from "../../utils/constants.js";
import { getShoppingCart } from "../../redux/actions/actions.js";

const shoppingCartCard = ({ id, name, price, image, qty }) => {
  const shoppingCartDB = useSelector((state) => state.shoppingCartDB);
  const user = useSelector((state) => state.user);
  const [total, setTotal] = useState(0);
  const [userID, setUserID] = useState(user?.user?.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const total = price * qty;
    setTotal(total.toFixed(2));
  }, [shoppingCartDB]);

  const handleDelete = async () => {
    const response = await fetch(
      `${API_URL}/cart/removeproduct/${userID}/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Error al eliminar el producto");
    }
    dispatch(getShoppingCart(userID));
  };

  const handleDecrease = async () => {
    const response = await fetch(
      `${API_URL}/cart/decreaseproduct/${userID}/${id}`,
      {
        method: "PUT",
      }
    );
    if (!response.ok) {
      throw new Error("Error al disminuir la cantidad del producto");
    }
    dispatch(getShoppingCart(userID));
  };

  const handleAdd = async () => {
    const response = await fetch(`${API_URL}/cart/addproduct/${userID}/${id}`, {
      method: "PUT",
    });
    if (!response.ok) {
      throw new Error("Error al aumentar la cantidad del producto");
    }
    dispatch(getShoppingCart(userID));
  };

  return (
    <article id={id} className="w-full h-44 sm:h-36">
      <div className="w-full h-44 flex flex-wrap justify-center bg-white rounded-lg border p-4 relative sm:justify-between sm:h-36 md:flex-row">
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
          <div className=" flex flex-col justify-center align-center gap-1 ">
            <p className="text-sundown-500 font-semibold">{name}</p>
            <p>Precio unitario: ${price}</p>
            <div className="h-8 flex items-center gap-1">
              <p>Cantidad: </p>
              <button
                onClick={() => handleDecrease()}
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
                onClick={() => handleAdd()}
                className="w-6 h-6 bg-sundown-500 rounded-md text-white"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center align-center mx-10 text-sundown-500 font-bold sm:mx-0">
          <p>Precio total: ${total}</p>
        </div>
        <button
          onClick={() => handleDelete()}
          className="cursor-pointer absolute top-0 right-0 flex justify-center items-center bg-sundown-500 w-8 h-8 rounded-full text-white font-semibold -mr-3 -mt-3 "
        >
          X
        </button>
      </div>
    </article>
  );
};

export default shoppingCartCard;
