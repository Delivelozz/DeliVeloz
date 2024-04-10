import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function EditProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true); // Estado para controlar la carga
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://deliveloz-ryfh.onrender.com/products/${id}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false); // Cambia el estado de carga a falso cuando los datos se han cargado
      } catch (error) {
        console.log("Error fetching: ", error);
      }
    };

    fetchData();

    // Limpia el efecto cuando el componente se desmonta o cuando el id cambia
    return () => setLoading(true); // Resetea el estado de carga a true al desmontar el componente o cuando id cambia
  }, [id]);

  // Si el estado de carga es verdadero, muestra la pantalla de carga
  if (loading) {
    return <div>Loading...</div>;
  }

  // Si el estado de carga es falso, muestra el formulario con los datos del producto
  return (
    <section className="container">
      <form action="">
        <h1>
          <span className="text-sundown-500">Editar</span> Producto
        </h1>
        <div className="flex flex-col">
          <label>Nombre: </label>
          <input
            type="text"
            name="name"
            id=""
            value={product.name}
            className="border border-sundown-500"
          />
        </div>

        <div className="flex flex-col">
          <label>Categoría:</label>
          <input
            type="text"
            name="category"
            id=""
            value={product.category}
            className="border border-sundown-500"
          />
        </div>

        <div className="flex flex-col">
          <label>Subcategoría:</label>
          <input
            type="text"
            name="subCategory"
            id=""
            value={product.subCategory}
            className="border border-sundown-500"
          />
        </div>

        <div className="flex flex-col">
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            id=""
            value={product.price}
            className="border border-sundown-500"
          />
        </div>

        <div className="flex flex-col">
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            id=""
            value={product.stockId}
            className="border border-sundown-500"
          />
        </div>

        <img src={product.image.jpg} alt="" />

        <img src={product.image.png} alt="" />

        <div className="flex flex-col">
          <label>Descripción:</label>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            value={product.description}
            className="border border-sundown-500"
          ></textarea>
        </div>
      </form>
    </section>
  );
}
