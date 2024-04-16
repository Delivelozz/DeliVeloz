import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getOrder } from "../../redux/actions/actions";
import { useLocalStoreUserData } from "../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../hooks/useGetShoppingDB.js";

export default function OrderUser() {
  const orderDetail = useSelector((state) => state.orderDetail);
  const user = useSelector((state) => state.user);
  const idOrder = useSelector((state) => state.idOrder);
  const [idUser, setIdUser] = useState(null);
  const dispatch = useDispatch();

  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

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
  }, [idUser, idOrder]);

  //console.log(orderDetail);

  return (
    <section className="container">
      <h2>Detalles del pedido</h2>
      <p>User ID: {orderDetail?.userId}</p>
      <p>Total a pagar: ${orderDetail?.total}</p>
      <h3>Productos:</h3>
      <ul>
        {orderDetail?.products?.map((product, index) => (
          <li key={index}>
            {product?.name} - Cantidad: {product?.quantity} - Precio: $
            {product?.price}
          </li>
        ))}
      </ul>

      {/* <p>Estado del pago: {orderDetail?.paid ? "Pagado" : "No pagado"}</p>
      <p>Estado del pedido: {orderDetail?.orderStatus}</p> */}
    </section>
  );
}
