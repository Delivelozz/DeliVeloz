import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import UploadWidget from "../../../components/cloudinary/UploadWidget";
import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";

export default function EditNews() {
  const dispatch = useDispatch();
  const [New, setNew] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  const [blog, SetBlog] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    subCategory: "",
    image: {
      jpg: "",
      png: "",
    },
    quantity: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://deliveloz-ryfh.onrender.com/banners/${id}`
        );
        const data = await response.json();
        SetBlog(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching: ", error);
      }
    };
    fetchData();
    return () => setLoading(true);
  }, [id]);

  const onChange = (e) => {
    const { name, value } = e.target;
    SetBlog({ ...blog, [name]: value });
  };

  console.log(blog);

  const onSubmit = async (e) => {
    e.preventDefault();
    // dispatch(editDishes({ ...dish, id }));
    alert("¡La publicación fue editada exitosamente!");
  };

  console.log("esto seria el plato:", blog);

  const handleImageUpload = (imageUrl, imageType) => {
    setBlog((prevBlog) => ({
      ...prevBlog,
      image: {
        ...prevBlog.image,
        [imageType]: imageUrl,
      },
    }));
  };

  // ? ---------------------------------------- Return

  if (loading) {
    return (
      <section className="flex justify-center items-center">
        <div class="custom-loader"></div>
      </section>
    );
  }

  return (
    <section className="container">
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3 flex flex-col gap-3 bg-white shadow-xl p-6 rounded-sm">
            <h1 className="mb-6">
              <span className="text-sundown-500">Editar</span> publicación
            </h1>
            <div className="flex flex-col">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Titulo:
              </label>
              <input
                onChange={onChange}
                type="text"
                name="title"
                value={blog.title}
                className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Descripción:
              </label>
              <textarea
                onChange={onChange}
                name="description"
                cols="30"
                rows="10"
                value={blog.description}
                className="bg-white border max-h-60 min-h-60 border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              ></textarea>
            </div>
          </div>

          <div className="col-span-1 bg-white shadow-xl p-6 rounded-sm flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Imagen:
              </label>
              <img src={blog.image.jpg} alt="" />
              <UploadWidget
                onImageUpload={(url) => handleImageUpload(url, "jpg")}
                imageType="jpg"
                texto="Cambiar imagen"
              />
            </div>
          </div>
        </div>

        <button className="btn-bg">Confirmar cambios</button>
      </form>
    </section>
  );
}
