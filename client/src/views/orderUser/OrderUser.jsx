import { useSelector } from "react-redux";

export default function OrderUser() {
  const order = useSelector((state) => state.order);

  const latestOrder = order.length > 0 ? order[order.length - 1] : null;

  if (!latestOrder) {
    return <div>No se encontró ningún pedido.</div>;
  }
  console.log(order);

  return (
    <section className="container">
      <h2>Detalles del pedido</h2>
      <p>User ID: {order.userId}</p>
      <p>Total a pagar: ${order.total.toFixed(2)}</p>
      <h3>Productos:</h3>
      <ul>
        {order.products.map((product, index) => (
          <li key={index}>
            {product.name} - Cantidad: {product.quantity} - Precio: $
            {product.price}
          </li>
        ))}
      </ul>
      <p>Estado del pago: {order.paid ? "Pagado" : "No pagado"}</p>
      <p>Estado del pedido: {order.orderStatus}</p>
    </section>
  );
}
