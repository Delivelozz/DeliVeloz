import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editDishes } from "../../../redux/actions/actions";
import UploadWidget from "../../../components/cloudinary/UploadWidget";
import validation from "./validation";
import { useLocalStoreUserData } from "../../../hooks/useLocalStoreUserData.js";
import { useLocalStoreUserDataGoogle } from "../../../hooks/useLocalStoreUserDataGoogle.js";
import { useGetShoppingDB } from "../../../hooks/useGetShoppingDB.js";
import Sidenav from "../../../components/admin/sidenav/Sidenav.jsx";
import { toast } from "react-toastify";

export default function EditProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useLocalStoreUserData();
  useLocalStoreUserDataGoogle();
  useGetShoppingDB();

  const [dish, setDish] = useState({
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

  // ? -------------------------------------- Errors

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    subCategory: "",
    availability: "",
    quantity: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://deliveloz-ryfh.onrender.com/products/${id}`
        );
        const data = await response.json();
        setDish(data);
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
    setDish({ ...dish, [name]: value });
  };

  const handleImageUpload = (imageUrl, imageType) => {
    setDish((prevDish) => ({
      ...prevDish,
      image: {
        ...prevDish.image,
        [imageType]: imageUrl,
      },
    }));
  };

  console.log(dish);

  const onSubmit = async (e) => {
    e.preventDefault();
    const errors = validation({ ...dish });

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      await dispatch(editDishes(dish, id));
      toast.success("¡El producto fue editado exitosamente!", {
        style: {
          backgroundColor: "green",
          color: "black",
        },
      });
    }
  };

  console.log("esto seria el plato:", dish);

  // ? ---------------------------------------- Return

  if (loading) {
    return (
      <section className="flex justify-center items-center">
        <div class="custom-loader"></div>
      </section>
    );
  }

  return (
    <div>
      <Sidenav />

      <section className="container">
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-4 gap-5">
            <div className="col-span-3 flex flex-col gap-3 bg-white border p-6 rounded-sm">
              <h1 className="mb-6">
                <span className="text-sundown-500">Editar</span> producto
              </h1>
              <div className="flex flex-col">
                <label className="font-semibold text-sm text-gray-800 mb-1">
                  Nombre:
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  name="name"
                  value={dish.name}
                  className=" bg-gray-50 border border-gray-600 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
                />
                {errors.name && <p className="error mt-2">{errors.name}</p>}
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-sm text-gray-800 mb-1">
                  Categoría:
                </label>
                <input
                  type="text"
                  onChange={onChange}
                  name="category"
                  value={dish.category}
                  className=" bg-gray-50 border border-gray-600 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
                />
                {errors.category && (
                  <p className="error mt-2">{errors.category}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-sm text-gray-800 mb-1">
                  Subcategoría:
                </label>
                <input
                  type="text"
                  onChange={onChange}
                  name="subCategory"
                  value={dish.subCategory}
                  className=" bg-gray-50 border border-gray-600 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
                />
                {errors.subCategory && (
                  <p className="error mt-2">{errors.subCategory}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-sm text-gray-800 mb-1">
                  Precio:
                </label>
                <input
                  onChange={onChange}
                  type="number"
                  name="price"
                  value={dish.price}
                  className=" bg-gray-50 border border-gray-600 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
                />
                {errors.price && <p className="error mt-2">{errors.price}</p>}
              </div>

              <div className="flex flex-col">
                <label className="font-semibold text-sm text-gray-800 mb-1">
                  Stock:
                </label>
                <input
                  onChange={onChange}
                  type="number"
                  name="quantity"
                  value={dish.quantity}
                  className=" bg-gray-50 border border-gray-600 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
                />
                {errors.quantity && (
                  <p className="error mt-2">{errors.quantity}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="font-semibold text-sm text-gray-800 mb-1">
                  Descripción:
                </label>
                <textarea
                  onChange={onChange}
                  name="description"
                  cols="30"
                  rows="10"
                  value={dish.description}
                  className="bg-white border max-h-60 min-h-60 border-gray-600 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
                ></textarea>
                {errors.description && (
                  <p className="error mt-2">{errors.description}</p>
                )}
              </div>
            </div>

            <div className="col-span-1 bg-white border p-6 rounded-sm flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm text-gray-800 mb-1">
                  Imagen jpg:
                </label>
                <img src={dish.image.jpg} alt="" />
                <UploadWidget
                  onImageUpload={(url) => handleImageUpload(url, "jpg")}
                  imageType="jpg"
                  texto="Cambiar imagen"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold text-sm text-gray-800 mb-1">
                  Imagen png:
                </label>
                <img src={dish.image.png} alt="" />
                <UploadWidget
                  onImageUpload={(url) => handleImageUpload(url, "png")}
                  imageType="png"
                  texto="Cambiar imagen"
                />
              </div>

              {errors.image && <p className="error">{errors.image}</p>}
            </div>
          </div>

          <button className="btn-bg">Confirmar cambios</button>
        </form>
      </section>
    </div>
  );
}
