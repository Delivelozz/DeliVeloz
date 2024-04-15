import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMyOrders } from "../../../redux/actions/actions";
import DataTable from "react-data-table-component";

export default function Orders() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(setMyOrders(user.id));
  }, [dispatch]);

  const myOrders = useSelector((state) => state.myOrders);
  console.log(myOrders);

  const columns = [
    {
      name: "Número de pedido",
      selector: (row) => row.id,
      sortable: true,
      width: "160px",
    },
    {
      name: "Estado de la orden",
      selector: (row) => row.orderStatus,
      width: "150px",
    },
    {
      name: "Precio total",
      selector: (row) => row.total,
      sortable: true,
      width: "150px",
    },
    {
      name: "Productos",
      cell: (row) => (
        <div>
          {row.products.map((product) => (
            <div key={product.id}>
              <p>Nombre: {product.name}</p>
              <p>Descripción: {product.description}</p>
              <p>Precio: {product.price}</p>
              <hr />
            </div>
          ))}
        </div>
      ),
      sortable: true,
      width: "300px",
    },
  ];

  return (
    <section className="container">
      <h1>Tablas de pedidos</h1>

      <DataTable columns={columns} data={myOrders} selectableRows pagination />
    </section>
  );
}
