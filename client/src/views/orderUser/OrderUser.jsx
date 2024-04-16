import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getOrder } from "../../redux/actions/actions";

export default function OrderUser() {
  const orderDetail = useSelector((state) => state.orderDetail);
  const user = useSelector((state) => state.user);
  const [idUser, setIdUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setIdUser(user?.user?.id);
  }, [user]);

  useEffect(() => {
    dispatch(getOrder(idUser));
  }, []);

  console.log(orderDetail);

  const latestOrder =
    orderDetail.length > 0 ? order[orderDetail.length - 1] : null;

  if (!latestOrder) {
    return <div>No se encontró ningún pedido.</div>;
  }
  console.log(orderDetail);

  if (!orderDetail) {
    return <div>No se encontró ningún pedido.</div>;
  }

  return (
    <section className="container">
      <h2>Detalles del pedido</h2>
      <p>User ID: {orderDetail.userId}</p>
      <p>Total a pagar: ${orderDetail.total.toFixed(2)}</p>
      <h3>Productos:</h3>
      <ul>
        {orderDetail.products.map((product, index) => (
          <li key={index}>
            {product.name} - Cantidad: {product.quantity} - Precio: $
            {product.price}
          </li>
        ))}
      </ul>
      <p>Estado del pago: {orderDetail.paid ? "Pagado" : "No pagado"}</p>
      <p>Estado del pedido: {orderDetail.orderStatus}</p>
    </section>
  );
}
