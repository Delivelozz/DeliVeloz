import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";
import { setShoppingCart } from "../../redux/actions/actions.js";
import Loader from "../../components/loader/Loader.jsx";

export default function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const [loading, setLoading] = useState(false); // Estado local de loading

  useEffect(() => {
    dispatch(setShoppingCart(shoppingCart));
  }, [shoppingCart, dispatch]);

  useLocalStoreUserData();

  useEffect(() => {
    fetch(`https://deliveloz-ryfh.onrender.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  const addToCart = (id) => {
    setLoading(true);
    const dataItem = {
      id,
      name: product.name,
      price: product.price,
      image: product.image.jpg,
      qty: 1,
      priceTotal: product.price,
    };
    const addRes = [...shoppingCart];
    const existingItem = addRes.find((item) => item.id === id);
    if (existingItem) {
      existingItem.qty += 1;
      existingItem.priceTotal = parseFloat(
        (existingItem.priceTotal + parseFloat(existingItem.price)).toFixed(2)
      );
    } else {
      addRes.push(dataItem);
    }
    dispatch(setShoppingCart(addRes));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="container flex gap-10 lg:w-3/5 lg:mb-80">
      <div className="w-1/2">
        <img
          src={product.image.jpg}
          alt=""
          className="w-full rounded-md object-cover max-h-80 min-h-80"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between ">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-xl mb-6 text-sundown-500">{product.name}</h1>
          <p>
            <span className="text-sundown-500 font-bold">Ingredientes: </span>
            {product.description}
          </p>
          <p>
            <span className="text-sundown-500 font-bold">Categoría: </span>
            {product.category}
          </p>
          <p className="text-sundown-500 font-bold text-xl ">
            $ {product.price}
          </p>
        </div>
        <div className="flex ">
          <button
            onClick={() => addToCart(id)}
            className="btn-bg flex items-center justify-center"
          >
            {loading ? <Loader /> : "Agregar"}
          </button>
        </div>
      </div>
    </div>
  );
}
