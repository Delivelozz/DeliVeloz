import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Popper } from "@mui/base/Popper";
import { useTheme } from "@mui/system";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData";
import "./Detail.css";
import { useGetShoppingDB } from "../../hooks/useGetShoppingDB.js";
import { useLocalStoreUserDataGoogle } from "../../hooks/useLocalStoreUserDataGoogle.js";
import { API_URL } from "../../utils/constants";
import { getShoppingCart } from "../../redux/actions/actions.js";

export default function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const shoppingCartDB = useSelector((state) => state.shoppingCartDB);
  const user = useSelector((state) => state.user);
  const [userID, setUserID] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const [averageRating, setAverageRating] = useState(null);
  const [assessments, setAssessments] = useState([]);
  const userData = useSelector((state) => state.userData);
  const [popperOpen, setPopperOpen] = useState(false);
  const [popperStock, setPopperStock] = useState(false);

  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  const anchorRef = useRef(null);

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

  useEffect(() => {
    fetch(`${API_URL}/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  useEffect(() => {
    fetch(`${API_URL}/assessment/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAverageRating(data.averageRating);
        setAssessments(data.assessmentsWithUserNames);
      })
      .catch((error) =>
        console.error("Error al obtener las valoraciones:", error)
      );
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
      await axios.post(`${API_URL}/assessment/${id}`, {
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
      await axios.put(`${API_URL}/assessment/${id}`, {
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
    return (
      <section className="flex justify-center items-center">
        <div className="custom-loader"></div>
      </section>
    );
  }

  const handleAdd = async () => {
    const response = await fetch(`${API_URL}/cart/addproduct/${userID}/${id}`, {
      method: "PUT",
    });
    if (!response.ok) {
      throw new Error("Error al aumentar la cantidad del producto");
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

  const handlePopperOpen = () => {
    setPopperOpen(true);
    setTimeout(() => {
      setPopperOpen(false);
    }, 3000);
  };

  const handlePopperStock = () => {
    setPopperStock(true);
    setTimeout(() => {
      setPopperStock(false);
    }, 3000);
  };

  return (
    <section className="flex flex-col container">
      <div className="container flex gap-2 lg:gap-10 lg:w-3/5">
        <div className="w-1/2">
          <img
            src={product.image.jpg}
            alt=""
            className="w-full rounded-md object-cover max-h-80 min-h-80"
          />
        </div>

        <div className="w-1/2 flex flex-col justify-between">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-xl mb-0 sm:mb-6 text-sundown-500">
              {product.name}
            </h1>
            <p className="line-clamp-4">
              <span className="text-sundown-500 font-bold">Ingredientes: </span>
              {product.description}
            </p>
            <p>
              <span className="text-sundown-500 font-bold">Categoría: </span>
              {product.category}
            </p>
            <p>
              <span className="text-sundown-500 font-bold">Subcategoría: </span>
              {product.subCategory}
            </p>
            <p className="text-sundown-500 font-bold text-xl ">
              $ {product.price}
            </p>
          </div>
          <div className="flex w-full h-10">
            {userID === undefined || userID === null ? (
              <div className="flex justify-center">
                <button
                  ref={anchorRef}
                  onClick={handlePopperOpen}
                  className="btn-bg flex items-center justify-center"
                >
                  Agregar
                </button>
                <Popper
                  className="mt-2"
                  open={popperOpen}
                  anchorEl={anchorRef.current}
                  placement="bottom"
                >
                  <div className="p-2 bg-gray-200 text-gray-800 rounded-md">
                    Iniciar sesión para agregar productos al carrito.
                  </div>
                </Popper>
              </div>
            ) : quantity > 0 ? (
              <div className="h-8 flex justify-center items-center gap-1">
                <p className="mr-1 text-sundown-500 font-semibold text-md md:font-bold md:text-xl ">
                  Cantidad:
                </p>
                <button
                  onClick={() => handleDecrease()}
                  className="w-4 md:w-6 h-6 bg-sundown-500 rounded-md text-white"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  className="border border-sundown-500 border-solid rounded-md w-6 md:w-8 h-6 text-center "
                />
                {product.quantity !== quantity && product.quantity !== 0 ? (
                  <button
                    onClick={() => handleAdd()}
                    className="w-6 h-6 bg-sundown-500 rounded-md text-white"
                  >
                    +
                  </button>
                ) : (
                  <div className="flex justify-center">
                    <button
                      ref={anchorRef}
                      onClick={handlePopperStock}
                      className="w-6 h-6 bg-sundown-500 rounded-md text-white"
                    >
                      +
                    </button>
                    <Popper
                      open={popperStock}
                      anchorEl={anchorRef.current}
                      placement="bottom"
                    >
                      <div className="p-2 bg-gray-200 text-gray-800 rounded-md">
                        No hay mas productos disponibles.
                      </div>
                    </Popper>
                  </div>
                )}
              </div>
            ) : (
              <div className=" w-20 h-8 flex justify-center mt-100">
                {product.quantity !== quantity && product.quantity !== 0 ? (
                  <button
                    onClick={() => handleAdd()}
                    className="btn-bg flex items-center justify-center"
                  >
                    {loading ? <Loader /> : "Agregar"}
                  </button>
                ) : (
                  <div>
                    <button
                      ref={anchorRef}
                      onClick={handlePopperStock}
                      className="btn-bg flex items-center justify-center"
                    >
                      {loading ? <Loader /> : "Agregar"}
                    </button>
                    <Popper
                      open={popperStock}
                      anchorEl={anchorRef.current}
                      placement="bottom"
                    >
                      <div className="p-2 bg-gray-200 text-gray-800 rounded-md">
                        No hay mas productos disponibles.
                      </div>
                    </Popper>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabla de Comentarios */}
      {assessments && assessments.length > 0 ? (
        <>
          <h4 className="mt-20 mb-4 text-lg font-bold text-sundown-500">
            Comentarios:
          </h4>
          <table className="w-full">
            <tbody className="border border-gray-200">
              {assessments.map((assessment) => (
                <tr
                  className="flex flex-col gap-4 p-6 border-b"
                  key={assessment.id}
                >
                  <td>{assessment.comment}</td>
                  <td>
                    {Array.from({ length: assessment.rating }).map(
                      (_, index) => (
                        <span
                          key={index}
                          className="text-xl"
                          style={{ color: "gold" }}
                        >
                          &#9733;
                        </span> // Estrellas doradas
                      )
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className="mt-20 mb-4 text-lg font-bold text-center text-sundown-500">
          No hay valoraciones aún
        </p>
      )}

      {/* --------------- VALORACIONES ------------------ */}
    </section>
  );
}
