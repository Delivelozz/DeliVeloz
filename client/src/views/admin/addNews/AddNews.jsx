import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";
import UploadWidget from "../../../components/cloudinary/UploadWidget";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postBlog } from "../../../redux/actions/actions.js";
import validationPost from "./validationPost.js";
import Sidenav from "../../../components/admin/sidenav/Sidenav.jsx";
import { toast } from "react-toastify";

export default function AddNews() {
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  const dispatch = useDispatch();

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

  // ? -------------------------------------- Cloudinary

  const handleImageUpload = (imageUrl, imageType) => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      image: {
        ...prevBlog.image,
        [imageType]: imageUrl,
      },
    }));
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
        toast.success("¡Novedad creada con éxito!", {
          style: {
            backgroundColor: "#55B938",
            color: "white",
          },
        });
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
                  <UploadWidget
                    onImageUpload={(url) => handleImageUpload(url, "jpg")}
                    imageType="jpg"
                    texto="Añadir imagen"
                  />
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
