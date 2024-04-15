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

  return (
    <section className="container">
      <Link to={`/profile`}>
        <div className="bg-sundown-500 w-10 flex justify-center items-center cursor-pointer rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            strokeWidth="16"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Link>
      <h1 className="mt-4">Tablas de pedidos</h1>
    </section>
  );
}
