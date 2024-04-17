import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/actions";
import { useEffect } from "react";
import DataTable from "react-data-table-component";

export default function UsersAdmin() {
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
    <section className="container-left col-span-4">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="">
          Tabla de <span className="text-sundown-500">Usuarios</span>
        </h1>

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
    </section>
  );
}