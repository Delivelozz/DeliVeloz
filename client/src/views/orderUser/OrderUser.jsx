import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getOrder } from "../../redux/actions/actions";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../hooks/useGetShoppingDB.js";
import Mercadopago from "../../components/mercadopago/Mercadopago.jsx";

export default function OrderUser() {
  const orderDetail = useSelector((state) => state.orderDetail);
  const shoppingCartDB = useSelector((state) => state.shoppingCartDB);
  const user = useSelector((state) => state.user);
  const idOrder = useSelector((state) => state.idOrder);
  const [idUser, setIdUser] = useState(null);
  const dispatch = useDispatch();

  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();
  //mercado pago
  const [showMercadoPago, setShowMercadoPago] = useState(false);

  const handlePay = () => {
    console.log(showMercadoPago);
    setShowMercadoPago(true);
  };

  const handlePaymentComplete = () => {
    console.log("Pago completado");
    setShowMercadoPago(false); // Ocultar el componente de MercadoPago después de que se complete el pago
  };

  console.log("ID de la user: ", idUser);
  console.log("ID de la order: ", idOrder);

  useEffect(() => {
    setIdUser(user?.user?.id);
  }, [user]);

  useEffect(() => {
    if (idUser && idOrder) {
      console.log("ID de la user: ", idUser);
      console.log("ID de la order: ", idOrder);
      dispatch(getOrder(idUser, idOrder));
    }
  }, [idUser, idOrder, dispatch]);

  //console.log(orderDetail);

  return (
    <section className="container">
      <div>
        <h1 className="mb-6">
          <span className="text-sundown-500">Detalle del</span> Pago
        </h1>
      </div>

      <div className="bg-white shadow-lg p-7 rounded w-3/4">
        {/* <p>User ID: {orderDetail?.userId}</p> */}
        <p>Total a pagar: ${orderDetail?.total}</p>
        <h3 className="font-semibold mt-4">Productos:</h3>
        <ul>
          {orderDetail?.products?.map((product, index) => (
            <li key={index}>
              {product?.name} - Cantidad: {product?.quantity} - Precio: $
              {product?.price}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex justify-center">
        {!showMercadoPago && ( // Mostrar el botón de pago solo si no se muestra el componente de MercadoPago
          <button
            className="btn-bg flex items-center justify-center"
            onClick={handlePay}
          >
            Pagar
          </button>
        )}
      </div>
      {showMercadoPago && (
        <Mercadopago
          shoppingCartDB={shoppingCartDB}
          onPaymentComplete={handlePaymentComplete}
        />
      )}
      {/* <p>Estado del pago: {orderDetail?.paid ? "Pagado" : "No pagado"}</p>
      <p>Estado del pedido: {orderDetail?.orderStatus}</p> */}
    </section>
  );
}
