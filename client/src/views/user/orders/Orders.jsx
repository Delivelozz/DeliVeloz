// !---------------------------- Hooks
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";
import axios from "axios";

// !---------------------------- Imports
import { setMyOrders } from "../../../redux/actions/actions";
import "../../../views/user/orders/modal.css";
import { API_URL } from "../../../utils/constants.js";

// !---------------------------- Exports


export default function Orders() {
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [product, setProduct] = useState(null);
  const [productInfo, setProductInfo] = useState(null);
  const userData = useSelector((state) => state.userData);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Función para obtener la información del producto con ID 1
    const fetchProductInfo = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/${id}`); // Sustituye "API_URL" por la URL de tu API
        setProductInfo(response.data);
      } catch (error) {
        console.error("Error al obtener la información del producto:", error);
      }
    };

    // Llama a la función para obtener la información del producto al cargar el componente
    fetchProductInfo();
  }, [id]);

  const handleStarClick = (starRating) => {
    setRating((prevRating) => (prevRating === starRating ? 0 : starRating));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/assessment/${id}`, {
        rating,
        comment,
        email: userData.email,
      });

      console.log("Valoración enviada");
      setRatingSent(true);
    } catch (error) {
      console.error("Error al enviar la valoración:", error);
    }
  };

  useEffect(() => {
    dispatch(setMyOrders(user?.id));
  }, [dispatch]);

  const myOrders = useSelector((state) => state.myOrders);
  console.log(myOrders);

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [ratingSent, setRatingSent] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modalOpen]);

  const columns = [
    {
      name: "",
      width: "160px",
    },
    {
      name: "Número de pedido",
      selector: (row) => row.id,
      sortable: true,
      width: "160px",
    },
    {
      name: "Productos",
      cell: (row) => (
        <div className="flex flex-col gap-3 my-8">
          {row.products.map((product) => (
            <div key={product.id} className="flex flex-row items-center gap-10">
              <div>
                <p>Nombre: {product.name}</p>
                <p>Precio: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      ),
      width: "350px",
    },
    {
      name: "",
      cell: (row) => (
        <div className="flex flex-col gap-6">
          {row.products.map((product) => (
            <div>
              <span
                className="btn-bg cursor-pointer max-w-6 min-w-6 max-h-8"
                onClick={() => {
                  setSelectedProductId(product.id);
                  setIsModalOpen(true); // Abrir el modal al hacer clic en el botón "Valorar"
                }}
              >
                {" "}
                Valorar
              </span>
              <hr />
            </div>
          ))}
        </div>
      ),
      width: "150px",
    },
    {
      name: "Metodo de Pago",
      selector: (row) => `${row.paymentMethod.type}`,
      width: "150px",
    },
    {
      name: "Estado",
      selector: (row) => `${row.paymentMethod.status}`,
      width: "150px",
    },
    {
      name: "Precio total",
      selector: (row) => `$${row.total}`,
      width: "150px",
    },
  ];
  return (
    <section className="container">
      <h1 className="mb-5">
        Tablas de <span className="text-sundown-500">pedidos</span>
      </h1>
      <DataTable columns={columns} data={myOrders} pagination />
      {selectedProductId && (
        <div className="modal">
          <div className="modal-content">
            <button className="h-4" onClick={closeModal}>
              <span
                style={{
                  marginLeft: "345px",
                  width: "16px",
                  height: "16px",
                  color: "#000",
                  fontSize: "16px",
                  lineHeight: "1",
                  textAlign: "center",
                }}
              >
                X
              </span>
            </button>
            <h1 className="ml-9 mb-7">¡Añade una valoración! </h1>
            {/* Renderiza la información del producto */}
            {productInfo && (
              <>
                <div className="container flex gap-1 lg:gap-3 lg:w-4/5 ml-2">
                  <div className="col-md-6">
                    <img
                      src={productInfo.image.jpg}
                      alt=""
                      className="w-50 rounded-md object-cover max-h-20 min-h-20"
                    />
                  </div>
                  <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
                    <p>{productInfo.name}</p>
                    <p>${productInfo.price}</p>
                  </div>
                </div>
              </>
            )}
            <div className="container pt-5">
              {!ratingSent ? (
                <form onSubmit={handleSubmit} className="mt-1 flex flex-col">
                  <div className="textarea-container flex-grow pb-3">
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Añade un comentario"
                      required
                      className="w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 mt-10 gray-border h-20 max-h-40 min-h-20 w-150 max-w-150 min-w-150 focus:outline-sundown-500 "
                    ></textarea>
                  </div>
                  <div className="flex items-end mt-0">
                    <div className="star-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`star ${
                            star <= rating ? "star-filled" : ""
                          }`}
                          onClick={() => handleStarClick(star)}
                          style={{ userSelect: "none" }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <button
                      type="submit"
                      className="btn-bg btn-sm ml-auto mt-3"
                    >
                      Enviar Valoración
                    </button>
                  </div>
                </form>
              ) : (
                <div className="alert mt-12 ml-6 mb-7 d-flex justify-content-center align-items-center">
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
                          className={`star ${
                            star <= rating ? "star-filled" : ""
                          }`}
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
          </div>
        </div>
      )}
    </section>
  );
}
