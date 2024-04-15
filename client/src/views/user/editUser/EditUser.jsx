import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { editUser } from "../../../redux/actions/actions";
import validation from "./validation";
import { Link } from "react-router-dom";
import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";

export default function EditUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData({
      name: user?.name,
      lastName: user?.lastName,
      email: user?.email,
      userAddress: user?.userAddress,
      phone: user?.phone,
    });
  }, [user]);

  // console.log(setUserData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    console.log(user?.id);
    dispatch(editUser({ id: user?.id, ...userData }));
  };

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
      <h1 className="mb-6 mt-6">
        Editar <span className="text-sundown-500">Usuario</span>
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex gap-5">
          <div className="flex flex-col flex-1">
            <label className="font-semibold text-sm text-sundown-500 mb-1">
              Nombre:
            </label>
            <input
              value={userData.name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Añadir nombre"
              className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-semibold text-sm text-sundown-500 mb-1">
              Apellido:
            </label>
            <input
              value={userData.lastName}
              onChange={handleChange}
              className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              type="text"
              name="lastName"
              placeholder="Añadir apellido "
            />
          </div>
        </div>

        <div className="flex justify-between gap-5">
          <div className="flex flex-col flex-1">
            <label className="font-semibold text-sm text-sundown-500 mb-1">
              Teléfono:
            </label>

            <input
              value={userData.phone}
              onChange={handleChange}
              className="bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              type="number"
              name="phone"
              placeholder="Añadir número de teléfono"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="font-semibold text-sm text-sundown-500 mb-1">
              Direccion:
            </label>

            <input
              value={userData.userAddress}
              onChange={handleChange}
              className="bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              type="text"
              name="userAddress"
              placeholder="Añadir direccion"
            />
          </div>
        </div>
        <button className="btn-bg">Confirmar cambios</button>
      </form>
    </section>
  );
}
