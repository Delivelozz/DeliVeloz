import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { postDishes } from "../../../redux/actions/actions";
import validation from "./validation";
import UploadWidget from "../../../components/cloudinary/UploadWidget";

export default function AddProduct() {
  const dispatch = useDispatch();

  // ? -------------------------------------- Cloudinary

  const handleImageUpload = (imageUrl, imageType) => {
    setDish((prevDish) => ({
      ...prevDish,
      image: {
        ...prevDish.image,
        [imageType]: imageUrl,
      },
    }));
  };

  // ? -------------------------------------- State Dish

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

  // ? --------------------------------------- On change

  const onChange = (e) => {
    const { name, value } = e.target;
    setDish({ ...dish, [name]: value });
  };

  // ? -------------------------------------- On submit

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
        quantity: "",
      });
      alert("¡El producto fue creado exitosamente!");
    }
  };

  // console.log(dish);

  return (
    <section className="container-left col-span-4">
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
                value={dish.quantity}
                onChange={onChange}
                className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
                type="number"
                name="quantity"
                placeholder="Añadir cantidad de productos"
              />
              {errors.quantity && <p className="error">{errors.quantity}</p>}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-5">
          <div className="flex flex-col flex-1 gap-5">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Imagen jpg:
              </label>
              <UploadWidget
                onImageUpload={(url) => handleImageUpload(url, "jpg")}
                imageType="jpg"
                texto="Añadir imagen"
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-5">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Imagen png:
              </label>
              <UploadWidget
                onImageUpload={(url) => handleImageUpload(url, "png")}
                imageType="png"
                texto="Añadir imagen"
              />
            </div>
          </div>
        </div>
        {errors.image && <p className="error -mt-3">{errors.image}</p>}

        <div className=" flex flex-col">
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
