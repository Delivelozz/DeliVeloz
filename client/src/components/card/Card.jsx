import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShoppingCart } from "../../redux/actions/actions.js";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader.jsx";

export default function Card(props) {
  const { id, name, image, price, category, subCategory } = props;
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const [loading, setLoading] = useState(false); // Estado local de loading

  useEffect(() => {
    dispatch(setShoppingCart(shoppingCart));
  }, [shoppingCart, dispatch]);

  const addToCart = (id) => {
    setLoading(true);
    const dataItem = { id, name, price, image, qty: 1, priceTotal: price };
    const addRes = [...shoppingCart];
    const existingItem = addRes.find((item) => item.id === id);
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
              <p className="bg-white/70 rounded-full px-1 mb-1">
                <span>Categoría: </span>
                {category}
              </p>
              <p className="bg-white/70 rounded-full px-1">
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
        <div className="flex justify-center" onClick={() => addToCart(id)}>
          <button className="btn-bg flex items-center justify-center">
            {loading ? <Loader /> : "Agregar"}
          </button>
        </div>
      </div>
    </article>
  );
}
