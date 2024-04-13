import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader.jsx";
import { API_URL } from "../../utils/constants.js";
import { getShoppingCart } from "../../redux/actions/actions.js";

export default function Card(props) {
  const { id, name, image, price, category, subCategory } = props;
  const dispatch = useDispatch();
  const shoppingCartDB = useSelector((state) => state.shoppingCartDB);
  const user = useSelector((state) => state.user);
  const [userID, setUserID] = useState(null);
  const [loading, setLoading] = useState(false); // Estado local de loading
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setUserID(user?.user?.id);
  }, [user]);

  useEffect(() => {
    const existingItem = shoppingCartDB?.products?.find(
      (item) => item.id == id
    );
    const productQTY = existingItem ? existingItem.quantity : 0;
    setQuantity(productQTY);
  }, [shoppingCartDB]);

  const handleAdd = async () => {
    const response = await fetch(`${API_URL}/cart/addproduct/${userID}/${id}`, {
      method: "PUT",
    });
    if (!response.ok) {
      throw new Error("Error al aumentar la cantidad del producto");
    }
    dispatch(getShoppingCart(userID)); // Agrega esta línea
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
    dispatch(getShoppingCart(userID)); // Agrega esta línea
  };

  return (
    <article id={id} className="w-full h-80">
      <div className="bg-white rounded-lg border flex flex-col gap-2 p-4 h-80">
        <Link to={`/detail/${id}`} className="h-48 mb-3">
          <figure className="w-full h-48 rounded-md cursor-pointer hover:text-black relative">
            <img
              src={image}
              alt={name}
              className="w-full h-48 mx-auto rounded-md object-cover"
            />
            <div className="text-sm ml-1 mb-1 absolute bottom-0 left-0 ">
              <p className="bg-white rounded-full px-1 mb-1">
                <span>Categoría: </span>
                {category}
              </p>
              <p className="bg-white rounded-full px-1">
                <span>Subcategoría: </span>
                {subCategory}
              </p>
            </div>
          </figure>
        </Link>
        <div className="w-full flex justify-between ">
          <p className="w-4/6 truncate font-bold">{name}</p>
          <p className="text-sundown-500 font-bold ">$ {price}</p>
        </div>
        {quantity > 0 ? (
          <div className="h-8 flex justify-center items-center gap-1">
            <button
              onClick={() => handleDecrease()}
              className="w-6 h-6 bg-sundown-500 rounded-md text-white"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              className="border border-sundown-500 border-solid rounded-md w-8 h-6 text-center "
            />
            <button
              onClick={() => handleAdd()}
              className="w-6 h-6 bg-sundown-500 rounded-md text-white"
            >
              +
            </button>
          </div>
        ) : (
          <div className="flex justify-center" onClick={() => handleAdd()}>
            <button className="btn-bg flex items-center justify-center">
              {loading ? <Loader /> : "Agregar"}
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

// bg - white / 80;
