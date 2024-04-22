import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getOrder } from "../../redux/actions/actions";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../hooks/useGetShoppingDB.js";
import Mercadopago from "../../components/mercadopago/Mercadopago.jsx";
import "./OrderUser.css";

export default function OrderUser() {
  const orderDetail = useSelector((state) => state.orderDetail);
  const shoppingCartDB = useSelector((state) => state.shoppingCartDB);
  //console.log("shoppingCartDB in OrderUser:", shoppingCartDB);
  const user = useSelector((state) => state.user);
  const idOrder = useSelector((state) => state.idOrder);
  const [idUser, setIdUser] = useState(null);
  const dispatch = useDispatch();

  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();
  //mercado pago
  const [showMercadoPago, setShowMercadoPago] = useState(false);

  const cartDB = Array.isArray(shoppingCartDB) ? shoppingCartDB : [];

  const productsArray = shoppingCartDB.products || [];

  const handlePay = () => {
    setShowMercadoPago(true);
  };

  const handlePaymentComplete = () => {
    console.log("Pago completado");
    setShowMercadoPago(false); // Ocultar el componente de MercadoPago
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
    <section className="section-container">
      <div className="container-titulo">
        <h1>
          <span className="titulo-span">Detalle del</span> Pago
        </h1>
      </div>

      <div className="container-ordertotal">
        <div className="container-order">
          <div className="container-row-order-product">
            <h3 className="row-order"><span>Productos</span></h3>
            <ul className="">
              {orderDetail?.products?.map((product, index) => (
                <li className="row-order-li" key={index}>
                  {product?.name} 
                </li>
              ))}
            </ul>
          </div>
          <div className="container-row-order">
            <h3 className="row-order"><span>Cantidad</span></h3>
            <ul>
              {orderDetail?.products?.map((product, index) => (
                <li className="row-order-li" key={index}>
                  {product?.quantity} 
                </li>
              ))}
            </ul>
          </div>
          <div className="container-row-order">
            <h3 className="row-order"><span>Total</span></h3>
            <div className="productos-order">
            <ul>
              {orderDetail?.products?.map((product, index) => (
                <li className="row-order-li" key={index}>
                  ${product?.price * product?.quantity}
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
        <div className="container-total">
          <span>Total a pagar:</span>
          <span>${orderDetail?.total}</span>
        </div>
      </div>

      <div className="button-pagar">
        {!showMercadoPago && (
          <button
            className=""
            onClick={handlePay}
          >
            Pagar
          </button>
        )}
      </div>
      {showMercadoPago && (
        <Mercadopago
          shoppingCartDB={productsArray}
          onPaymentComplete={handlePaymentComplete}
        />
      )}
    </section>
  );
}