import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { editUser } from "../../../redux/actions/actions";
import validation from "./validation";

export default function EditUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  //const [userData, setUserData] = useState({});

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    userAddress: "",
    phone: "",
  });

  useEffect(() => {
    if (user) {
      setUserData({
        name: user.name || "",
        lastName: user.lastName || "",
        email: user.email || "",
        userAddress: user.userAddress || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  console.log(setUserData);

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    userAddress: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Primero, valida los datos
    const newErrors = validation(userData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Envia los datos a través de la acción editUser
    try {
      await dispatch(editUser({ id: user.id, ...userData }));
      alert("¡Usuario editado con éxito!");
      // Si la actualización es exitosa, restablece los datos del formulario
      setUserData({
        name: "",
        lastName: "",
        email: "",
        userAddress: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error al editar el usuario:", error);
      alert(
        "Ocurrió un error al editar el usuario. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <section className="container">
      <h1 className="mb-6">
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
            {errors.name && <p className="error">{errors.name}</p>}
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
            {errors.lastName && <p className="error">{errors.lastName}</p>}
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
            {errors.phone && <p className="error">{errors.phone}</p>}
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
            {errors.userAddress && (
              <p className="error">{errors.userAddress}</p>
            )}
          </div>
        </div>
        <button className="btn-bg">Confirmar cambios</button>
      </form>
    </section>
  );
}
