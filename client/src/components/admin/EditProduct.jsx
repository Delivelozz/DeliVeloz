import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editDishes } from "../../redux/actions/actions";

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

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(editDishes({ ...dish, id }));
    alert("¡El producto fue editado exitosamente!");
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
    <section className="container">
      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-3 flex flex-col gap-3 bg-white shadow-xl p-6 rounded-sm">
            <h1 className="mb-6">
              <span className="text-sundown-500">Editar</span> Producto
            </h1>
            <div className="flex flex-col">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Nombre:
              </label>
              <input
                onChange={onChange}
                type="text"
                name="name"
                value={dish.name}
                className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Categoría:
              </label>
              <input
                type="text"
                onChange={onChange}
                name="category"
                value={dish.category}
                className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Subcategoría:
              </label>
              <input
                type="text"
                onChange={onChange}
                name="subCategory"
                value={dish.subCategory}
                className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Precio:
              </label>
              <input
                onChange={onChange}
                type="number"
                name="price"
                value={dish.price}
                className=" bg-gray-50 border border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Stock:
              </label>
              <input
                onChange={onChange}
                type="number"
                name="quantity"
                value={dish.quantity}
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
                value={dish.description}
                className="bg-white border max-h-60 min-h-60 border-sundown-500 p-2 rounded-lg text-sm focus:outline-sundown-500 focus:border-transparent"
              ></textarea>
            </div>
          </div>

          <div className="col-span-1 bg-white shadow-xl p-6 rounded-sm flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Imagen jpg:
              </label>
              <img src={dish.image.jpg} alt="" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm text-sundown-500 mb-1">
                Imagen png:
              </label>
              <img src={dish.image.png} alt="" />
            </div>
          </div>
        </div>

        <button className="btn-bg">Confirmar cambios</button>
      </form>
    </section>
  );
}
