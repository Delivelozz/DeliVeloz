import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../../redux/actions/actions";
import { useEffect } from "react";
import DataTable from "react-data-table-component";
import Sidenav from "../../../components/admin/sidenav/Sidenav";
import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";

export default function ListUsers() {
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log(allUsers);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      width: "100px",
    },
    {
      name: "Nombre",
      selector: (row) => row.name,
      width: "150px",
    },
    {
      name: "Apellido",
      selector: (row) => row.lastName,
      width: "150px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Ubicación",
      selector: (row) => row.userAddress,
    },
    {
      name: "Celular",
      selector: (row) => row.phone,
    },
    {
      name: "Activo",
      selector: (row) => (row.active ? "Sí" : "No"),
      width: "100px",
    },
  ];

  return (
    <div>
      <Sidenav />
      <section className="container">
        <div className="bg-white border px-2 py-6 rounded-lg shadow-sm">
          <div className="mb-6 flex justify-between items-center">
            <h4 className="font-medium">Lista de Usuarios</h4>

            {/* <input
          type="text"
          placeholder="Buscar..."
          className="w-48 bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
        /> */}
          </div>
          <DataTable
            columns={columns}
            data={allUsers}
            selectableRows
            onSelectedRowsChange={(data) => console.log(data)}
            pagination
          />
        </div>
      </section>
    </div>
  );
}
