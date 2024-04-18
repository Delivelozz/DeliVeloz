import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAllDishes, disabledDishes } from "../../../redux/actions/actions";
import EditIcon from "../../../components/icons/EditIcon";
import DeleteIcon from "../../../components/icons/DeleteIcon";
import Sidenav from "../../../components/admin/sidenav/Sidenav";
import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";

export default function ListProducts() {
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllDishes());
  }, [dispatch]);

  const allDishes = useSelector((state) => state.allDishes);
  console.log(allDishes);
  const [filterText, setFilterText] = useState("");
  const [filterDishes, setFilterDishes] = useState(allDishes);

  useEffect(() => {
    setFilterDishes(filterBySearch(allDishes, filterText));
  }, [allDishes, filterText]);

  const handleChange = (e) => {
    setFilterText(e.target.value);
  };

  const filterBySearch = (allDishes, searchText) => {
    return allDishes.filter((dish) =>
      dish.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const onDisabled = async ({ id, availability }) => {
    try {
      await dispatch(disabledDishes({ id, availability }));
      await dispatch(setAllDishes());
    } catch (error) {
      console.error("Error al desactivar el producto:", error);
    }
  };

  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      sortable: true,
      width: "100px",
    },
    {
      name: "Nombre",
      selector: (row) => row.name,
      sortable: true,
      width: "200px",
    },
    {
      name: "Precio",
      selector: (row) => row.price,
      sortable: true,
      width: "100px",
    },
    {
      name: "Categoría",
      selector: (row) => row.category,
      sortable: true,
      width: "150px",
    },
    {
      name: "Subcategoría",
      selector: (row) => row.subCategory,
      sortable: true,
      width: "150px",
    },
    {
      name: "Descripción",
      selector: (row) => row.description,
      width: "250px",
    },
    {
      name: "Imagen",
      cell: (row) => (
        <img
          src={row.image.jpg}
          alt="Imagen"
          style={{
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ),
      width: "100px",
    },
    {
      name: "Disponibilidad",
      selector: (row) => (row.availability ? "Sí" : "No"),
      sortable: true,
      width: "100px",
    },
    {
      name: "Stock",
      selector: (row) => row.quantity,
      sortable: true,
      width: "100px",
    },
    {
      name: "Editar",
      cell: (row) => (
        <Link to={`/dashboard/products/editProduct/${row.id}`}>
          <EditIcon width={22} height={22} color={"#E74C4C"} />
        </Link>
      ),
      width: "100px",
    },
    {
      name: "Desactivar",
      cell: (row) => (
        <button onClick={() => onDisabled(row)}>
          <DeleteIcon width={22} height={22} color={"#E74C4C"} />
        </button>
      ),
      width: "100px",
    },
  ];

  return (
    <div>
      <Sidenav />
      <section className=" container">
        <div className=" border px-2 py-6 bg-white rounded-lg shadow-sm">
          <div className="mb-6 flex justify-between items-center ">
            <h4 className="font-medium">Lista de Productos</h4>

            <input
              type="text"
              onChange={handleChange}
              placeholder="Buscar..."
              className="min-w-64 bg-gray-50 border p-2 text-sm rounded-lg focus:outline-sundown-500 focus:border-transparent"
            />
          </div>

          <DataTable
            columns={columns}
            data={filterDishes}
            onSelectedRowsChange={(data) => console.log(data)}
            pagination
          />
        </div>
      </section>
    </div>
  );
}
