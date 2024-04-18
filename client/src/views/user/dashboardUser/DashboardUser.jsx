// ?-------------------------- Hooks

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { smoothScrollToTop } from "../../../functions/SmoothScroll";
import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";

export default function DashboardUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  //console.log(user);

  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  return (
    <section className="container">
      <div className=" flex flex-col justify-center items-center">
        <h1 className="mb-4">
          <span className="text-sundown-500">¡Bienvenido</span> {user?.name}{" "}
          {user?.lastName}!
        </h1>
        <img
          src="https://res.cloudinary.com/derot8znd/image/upload/v1712286915/Otros/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju_g2ngxd.webp"
          alt="user"
          className="rounded-full w-52 h-52 mb-4"
        />
        <div>
          <div className="bg-white rounded-md border p-4 min-w-96">
            <div className="flex flex-col gap-1 mb-4">
              <p>
                <span className="text-sundown-500 font-semibold">Nombre: </span>{" "}
                {user?.name}
              </p>
              <p>
                <span className="text-sundown-500 font-semibold">
                  Apellido:{" "}
                </span>
                {user?.lastName}
              </p>
              <p>
                <span className="text-sundown-500 font-semibold">Nombre: </span>
                {user?.email}
              </p>
              <p>
                <span className="text-sundown-500 font-semibold">
                  Número de teléfono:{" "}
                </span>
                {user?.phone}
              </p>
              <p>
                <span className="text-sundown-500 font-semibold">
                  Ubicación:{" "}
                </span>
                {user?.userAddress}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                to={`/profile/editUser/${user?.id}`}
                className="btn-bg hover:text-white"
                onClick={() => smoothScrollToTop()}
              >
                Editar datos del usuario
              </Link>

              <Link
                to={"/profile/orders"}
                className="btn-bg hover:text-white"
                onClick={() => smoothScrollToTop()}
              >
                Historial de compras
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
