import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postDishes } from "../../redux/actions/actions";
import validation from "./validation";

export default function AddProduct() {
  const dispatch = useDispatch();
  const [urlJpg, setUrlJpg] = useState("");
  const [urlPng, setUrlPng] = useState("");

  useEffect(() => {
    dispatch(postDishes());
  }, [dispatch]);

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
    availability: true,
    stockId: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    subCategory: "",
    availability: "",
    stockId: "",
    images: "",
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
    setDish({
      ...dish,
      image: { ...dish.image, jpg: response.data.secure_url },
    });
  };

  const deleteImage = () => {
    setUrlJpg("");
    setDish({ ...dish, image: { ...dish.image, jpg: "" } });
  };

  const changeUploadImagePng = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "delivelozpng");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/derot8znd/image/upload",
      data
    );

    setUrlPng(response.data.secure_url);
    setDish({
      ...dish,
      image: { ...dish.image, png: response.data.secure_url },
    });
  };

  const deleteImagePng = () => {
    setUrlPng("");
    setDish({ ...dish, image: { ...dish.image, png: "" } });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setDish({ ...dish, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errors = validation({ ...dish });

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      await dispatch(postDishes(dish));
      setDish({
        name: "",
        description: "",
        price: "",
        category: "",
        subCategory: "",
        image: {
          jpg: "",
          png: "",
        },
        availability: "",
        stockId: "",
      });
      alert("¡El producto fue creado exitosamente!");
    }
  };

  console.log(dish);

  return (
    <section className="container-left">
      <h1 className="mb-6">
        Añadir <span className="text-sundown-500">Producto</span>
      </h1>

      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <div className="flex justify-between gap-5">
          <div className="flex flex-col flex-1">
            <label className="font-semibold text-sm text-sundown-500 mb-1">
              Nombre:
            </label>

            <div className="flex flex-col gap-2">
              <input
                value={dish.name}
                onChange={onChange}
                type="text"
                name="name"
                placeholder="Añadir nombre"
                className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <label className="font-semibold text-sm text-sundown-500 mb-1">
              Categoría:
            </label>
            <div className="flex flex-col gap-2">
              <input
                value={dish.category}
                onChange={onChange}
                className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
                type="text"
                name="category"
                placeholder="Añadir categoría"
              />
              {errors.category && <p className="error">{errors.category}</p>}
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-5">
          <div className="flex flex-col flex-grow">
            <label className="font-semibold text-sm text-sundown-500 mb-1">
              Subcategoría:
            </label>
            <div className="flex flex-col gap-2">
              <input
                value={dish.subCategory}
                onChange={onChange}
                className="bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
                type="text"
                name="subCategory"
                placeholder="Añadir subcategoría"
              />
              {errors.subCategory && (
                <p className="error">{errors.subCategory}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col flex-grow">
            <label className="font-semibold text-sm text-sundown-500 mb-1">
              Precio:
            </label>
            <div className="flex flex-col gap-2">
              <input
                value={dish.price}
                onChange={onChange}
                className="bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
                type="number"
                name="price"
                placeholder="Añadir precio"
              />
              {errors.price && <p className="error">{errors.price}</p>}
            </div>
          </div>

          <div className="flex flex-col flex-grow">
            <label className="font-semibold text-sm text-sundown-500 mb-1">
              Cantidad
            </label>
            <div className="flex flex-col gap-2">
              <input
                value={dish.stockId}
                onChange={onChange}
                className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
                type="number"
                name="stockId"
                placeholder="Añadir cantidad de productos"
              />
              {errors.stockId && <p className="error">{errors.stockId}</p>}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-5">
          <div className="flex flex-col flex-1 gap-5">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Imagen jpg:
              </label>
              <div className="flex flex-col gap-2">
                <input
                  value={dish.jpg}
                  type="file"
                  name="images"
                  accept="image/*"
                  onChange={changeUploadImageJpg}
                />
              </div>
            </div>

            {urlJpg && (
              <div>
                <img src={urlJpg} alt="Imagen JPG" className="w-72" />
                <button className="btn-bg mt-5" onClick={deleteImage}>
                  Eliminar Imagen
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-col flex-1 gap-5">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Imagen png:
              </label>
              <div className="flex flex-col gap-2">
                <input
                  value={dish.png}
                  type="file"
                  name="images"
                  accept="image/*"
                  onChange={changeUploadImagePng}
                />
              </div>
            </div>

            {urlPng && (
              <div>
                <img src={urlPng} alt="Imagen PNG" className="w-72" />
                <button className="btn-bg mt-5" onClick={deleteImagePng}>
                  Eliminar Imagen
                </button>
              </div>
            )}
          </div>
        </div>

        {errors.images && <p className="error">{errors.images}</p>}

        <div className="flex flex-col">
          <label className="font-semibold text-sm text-sundown-500 mb-1">
            Descripción:
          </label>
          <div className="flex flex-col gap-2">
            <textarea
              value={dish.description}
              onChange={onChange}
              name="description"
              cols="30"
              rows="10"
              className="bg-white border max-h-60 min-h-60 border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              placeholder="Descripción del producto..."
            ></textarea>
            {errors.description && (
              <p className="error">{errors.description}</p>
            )}
          </div>
        </div>

        <button className="btn-bg">Subir Producto</button>
      </form>
    </section>
  );
}
