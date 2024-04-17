import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";

import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postBlog } from "../../../redux/actions/actions.js";
import validationPost from "./validationPost.js";
import Sidenav from "../../../components/admin/sidenav/Sidenav.jsx";

export default function AddNews() {
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  const dispatch = useDispatch();
  const [urlJpg, setUrlJpg] = useState("");

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: {
      jpg: "",
    },
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    image: "",
  });

  const changeUploadImageJpg = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "deliveloz");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/derot8znd/image/upload",
      data
    );

    setUrlJpg(response.data.secure_url);
    setBlog({
      ...blog,
      image: { ...blog.image, jpg: response.data.secure_url },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validationPost(blog);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setFormSubmitted(true);
      try {
        await dispatch(postBlog(blog));
        setBlog({
          title: "",
          description: "",
          image: {
            jpg: "",
          },
        });
        setFormSubmitted(false); // Restablecer la bandera
        alert("¡Novedad creada con éxito!");
      } catch (error) {
        console.error("Error al enviar los datos: ", error);
      }
    }
  };
  //console.log("blog:", blog);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  return (
    <div>
      <Sidenav />
      <section className="container col-span-4 py-16">
        <h1 className="mb-6">
          Añadir <span className="text-sundown-500">Novedad</span>
        </h1>

        {/* Inicio Formulario */}
        <form className="flex flex-col gap-5" onSubmit={(e) => handleSubmit(e)}>
          {/* Inicio Añadir Nombre */}
          <div className="flex justify-between gap-5">
            <div className="flex flex-col flex-1">
              <label className="font-semibold text-sm text-gray-800 mb-1">
                Nombre:
              </label>

              <div className="flex flex-col gap-2">
                <input
                  value={blog.title}
                  onChange={handleChange}
                  type="text"
                  name="title"
                  placeholder="Añadir novedad"
                  className=" bg-gray-50 border border-gray-600 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
                />
                {errors.title && <p className="error">{errors.title}</p>}
              </div>
            </div>
            {/* Fin Añadir Nombre */}
            {/* Inicio Añadir Imagen */}
            <div className="flex justify-between items-center gap-5">
              <div className="flex flex-col flex-1 gap-5">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold text-sm text-gray-800 mb-1">
                    Imagen jpg:
                  </label>
                  <div className="flex flex-col gap-2">
                    <input
                      value={blog.jpg}
                      type="file"
                      name="images"
                      accept="image/*"
                      onChange={changeUploadImageJpg}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col">
            <label className="font-semibold text-sm text-gray-800 mb-1">
              Descripción:
            </label>
            <div className="flex flex-col gap-2">
              <textarea
                value={blog.description}
                onChange={handleChange}
                name="description"
                cols="30"
                rows="10"
                className="bg-white border max-h-60 min-h-60 border-gray-600 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
                placeholder="Descripción..."
              ></textarea>
              {errors.description && (
                <p className="error">{errors.description}</p>
              )}
            </div>
          </div>
          <button className="btn-bg">Crear Novedad</button>
        </form>
      </section>
    </div>
  );
}
