import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShoppingCart } from "../../redux/actions/actions.js";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader.jsx";
import { useShoppingCartDelete } from "../../hooks/useShoppingCartDelete.js";

export default function Card(props) {
  const { id, name, image, price, category, subCategory } = props;
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const [loading, setLoading] = useState(false); // Estado local de loading
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    dispatch(setShoppingCart(shoppingCart));
    const existingItem = shoppingCart.find((item) => item.id == id);
    const productQTY = existingItem ? existingItem.qty : 0;
    setQuantity(productQTY);
  }, [shoppingCart, dispatch]);
  //console.log(shoppingCart);

  /* useEffect(() => {
    qtyID(id);
  }, [shoppingCart]); */

  const addToCart = (id) => {
    setLoading(true);
    const dataItem = { id, name, price, image, qty: 1, priceTotal: price };
    const addRes = [...shoppingCart];
    const existingItem = addRes.find((item) => item.id == id);
    if (existingItem) {
      existingItem.qty += 1;
      existingItem.priceTotal = parseFloat(
        (existingItem.priceTotal + parseFloat(price)).toFixed(2)
      );
    } else {
      addRes.push(dataItem);
    }
    //console.log(addRes);
    dispatch(setShoppingCart(addRes));
    setTimeout(() => {
      setLoading(false);
    }, 500);
    //console.log(shoppingCart);
  };

  const deleteFromCart = useShoppingCartDelete();
  const handleDelete = () => {
    deleteFromCart(id, price);
  };

  /* const qtyID = (id) => {
    const existingItem = shoppingCart.find((item) => item.id === id);
    const productQTY = existingItem ? existingItem.qty : 0;
    setQuantity(productQTY);
  }; */

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
              onClick={handleDelete}
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
              onClick={() => addToCart(id)}
              className="w-6 h-6 bg-sundown-500 rounded-md text-white"
            >
              +
            </button>
          </div>
        ) : (
          <div className="flex justify-center" onClick={() => addToCart(id)}>
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
