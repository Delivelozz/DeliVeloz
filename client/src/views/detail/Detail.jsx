import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setShoppingCart } from "../../redux/actions/actions";
import Loader from "../../components/loader/Loader";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData";
import { useShoppingCartDelete } from "../../hooks/useShoppingCartDelete";
import "./Detail.css";
import { useLocalStoreUserDataGoogle } from "../../hooks/useLocalStoreUserDataGoogle.js";

export default function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();

  useEffect(() => {
    dispatch(setShoppingCart(shoppingCart));
    const existingItem = shoppingCart.find((item) => item.id === id);
    const productQTY = existingItem ? existingItem.qty : 0;
    setQuantity(productQTY);
  }, [shoppingCart, dispatch, id]);

  const deleteFromCart = useShoppingCartDelete();
  const handleDelete = () => {
    deleteFromCart(id, product.price);
  };

  useEffect(() => {
    fetch(`https://deliveloz-ryfh.onrender.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [ratingSent, setRatingSent] = useState(false);

  const handleStarClick = (starRating) => {
    setRating((prevRating) => (prevRating === starRating ? 0 : starRating));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://deliveloz-ryfh.onrender.com/assessment/${id}`, {
        rating,
        comment,
      });

      console.log("Valoración enviada");
      setRatingSent(true);
    } catch (error) {
      console.error("Error al enviar la valoración:", error);
    }
  };

  const handleUpdateRating = async () => {
    try {
      await axios.put(`https://deliveloz-ryfh.onrender.com/assessment/${id}`, {
        rating,
        comment,
      });
      console.log("Valoración actualizada");
      setRatingSent(true);
    } catch (error) {
      console.error("Error al actualizar la valoración:", error);
    }
  };
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
    const existingItem = addRes.find((item) => item.id == id);
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
    <section className="flex flex-col">
      <div className="container flex gap-10 lg:w-3/5">
        <div className="w-1/2">
          <img
            src={product.image.jpg}
            alt=""
            className="w-full rounded-md object-cover max-h-80 min-h-80"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-between">
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
            {quantity > 0 ? (
              <div className="h-8 flex justify-center items-center gap-1">
                <p className="mr-2 text-sundown-500 font-bold text-xl ">
                  Cantidad:
                </p>
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
              <div
                className=" w-20 h-8 flex justify-center mt-100"
                onClick={() => addToCart(id)}
              >
                <button className="absolute btn-bg flex items-center justify-center mb-100">
                  {loading ? <Loader /> : "Agregar"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* --------------- VALORACIONES ------------------ */}

      <div className="container pt-10">
        {!ratingSent ? (
          <form onSubmit={handleSubmit} className="mt-1 flex flex-col">
            <div className="textarea-container flex-grow pb-3">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Añade un comentario"
                required
                className="w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 gray-border h-40 max-h-40 min-h-40 focus:outline-sundown-500"
              ></textarea>
            </div>
            <div className="flex items-end mt-0">
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= rating ? "star-filled" : ""}`}
                    onClick={() => handleStarClick(star)}
                    style={{ userSelect: "none" }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button type="submit" className="btn-bg btn-sm ml-auto">
                Enviar Valoración
              </button>
            </div>
          </form>
        ) : (
          <div className="alert mt-12">
            <p>Tu valoración ha sido enviada!</p>
          </div>
        )}
        <div className="flex flex-col gap-4 justify-center items-center">
          {!ratingSent ? (
            <form onSubmit={handleSubmit}>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= rating ? "star-filled" : ""}`}
                    onClick={() => handleStarClick(star)}
                  ></span>
                ))}
              </div>
            </form>
          ) : (
            <div className="alert"></div>
          )}
        </div>
      </div>

      {/* --------------- VALORACIONES ------------------ */}
    </section>
  );
}
