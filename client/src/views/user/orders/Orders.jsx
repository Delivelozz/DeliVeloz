import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMyOrders } from "../../../redux/actions/actions";
import DataTable from "react-data-table-component";
import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";

export default function Orders() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  useEffect(() => {
    dispatch(setMyOrders(user?.id));
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
      selector: (row) => `$${row.total}`,
      width: "150px",
    },
    {
      name: "Productos",
      cell: (row) => (
        <div>
          {row.products.map((product) => (
            <div key={product.id} className="flex flex-col gap-3">
              <div>
                <p>Nombre: {product.name}</p>
                <p>Precio: ${product.price}</p>
              </div>
              <Link to={`/editUser/${product.id}`}>
                <span className="btn-bg cursor-pointer">Valorar</span>
              </Link>
              <hr />
            </div>
          ))}
        </div>
      ),
      width: "250px",
    },
  ];

  return (
    <section className="container">
      <h1 className="mb-5">
        Tablas de <span className="text-sundown-500">pedidos</span>
      </h1>
      <DataTable columns={columns} data={myOrders} pagination />
    </section>
  );
}
