import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function EditProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://deliveloz-ryfh.onrender.com/products/${id}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching: ", error);
      }
    };

    fetchData();

    return () => setLoading(true);
  }, [id]);

  if (loading) {
    return <section>Loading...</section>;
  }

  return (
    <section className="container">
      <form action="" className="flex flex-col gap-5">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3 flex flex-col gap-3 bg-white shadow-xl p-6 rounded-sm">
            <h1 className="mb-6">
              <span className="text-sundown-500">Editar</span> Producto
            </h1>
            <div className="flex flex-col">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Nombre:{" "}
              </label>
              <input
                type="text"
                name="name"
                id=""
                value={product.name}
                className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Categoría:
              </label>
              <input
                type="text"
                name="category"
                id=""
                value={product.category}
                className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Subcategoría:
              </label>
              <input
                type="text"
                name="subCategory"
                id=""
                value={product.subCategory}
                className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Precio:
              </label>
              <input
                type="number"
                name="price"
                id=""
                value={product.price}
                className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Stock:
              </label>
              <input
                type="number"
                name="stock"
                id=""
                value={product.stockId}
                className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Descripción:
              </label>
              <textarea
                name="description"
                id=""
                cols="30"
                rows="10"
                value={product.description}
                className="bg-white border max-h-60 min-h-60 border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              ></textarea>
            </div>
          </div>

          <div className="col-span-1 bg-white shadow-xl p-6 rounded-sm flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Imagen jpg:
              </label>
              <img src={product.image.jpg} alt="" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Imagen png:
              </label>
              <img src={product.image.png} alt="" />
            </div>
          </div>
        </div>

        <button className="btn-bg">Confirmar cambios</button>
      </form>
    </section>
  );
}
