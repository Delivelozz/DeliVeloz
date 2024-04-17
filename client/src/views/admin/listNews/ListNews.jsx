import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import EditIcon from "../../../components/icons/EditIcon";
import { setBlogData } from "../../../redux/actions/actions";
import Sidenav from "../../../components/admin/sidenav/Sidenav";
import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";

export default function ListNews() {
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(setBlogData());
  }, [dispatch]);

  const [filterText, setFilterText] = useState("");
  const [filterBlog, setFilterBlog] = useState(blog);

  console.log("Estos son los blogs: ", blog);

  useEffect(() => {
    setFilterBlog(filterBySearch(blog, filterText));
  }, [blog, filterText]);
  const handleChange = (e) => {
    setFilterText(e.target.value);
  };

  const filterBySearch = (blog, searchText) => {
    return blog.filter((single) =>
      single.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
      sortable: true,
      width: "100px",
    },
    {
      name: "Titulo",
      selector: (row) => row.title,
      sortable: true,
      width: "200px",
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
      name: "Editar",
      cell: (row) => (
        <Link to={`/dashboard/news/editNews/${row.id}`}>
          <EditIcon width={22} height={22} color={"#E74C4C"} />
        </Link>
      ),
      width: "100px",
    },
  ];

  return (
    <div>
      <Sidenav />
      <section className="container">
        <div className="bg-white border px-2 py-6 rounded-lg shadow-sm">
          <div className="mb-6 flex justify-between items-center">
            <h4 className="font-medium">Lista de Novedades</h4>

            <input
              type="text"
              onChange={handleChange}
              placeholder="Buscar..."
              className="w-48 rounded-lg bg-gray-50 border border-sundown-500 p-2 text-sm focus:outline-sundown-500 focus:border-transparent"
            />
          </div>
          <DataTable
            columns={columns}
            data={filterBlog}
            selectableRows
            onSelectedRowsChange={(data) => console.log(data)}
            pagination
          />
        </div>
      </section>
    </div>
  );
}
