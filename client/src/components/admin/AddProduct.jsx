import React from "react";

export default function AddProduct() {
  return (
    <section className="container">
      <h1 className="">
        Añadir <span className="text-sundown-500">Producto</span>
      </h1>

      <div className="flex flex-col">
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" placeholder="Añadir nombre" />

        <label htmlfor="price">Precio:</label>
        <input type="number" name="price" placeholder="Añadir precio" />

        <label htmlFor="category">Categoría:</label>
        <input type="text" name="category" placeholder="Añadir categoría" />

        <label htmlFor="subCategory">Subcategoría:</label>
        <input
          type="text"
          name="subCategory"
          placeholder="Añadir subcategoría"
        />

        <label htmlFor="imagejpg">Imagen principal:</label>
        <input type="input" name="imagejpg" placeholder="Añadir imagen jpg" />

        <label htmlFor="imagepng">Imagen Transparente:</label>
        <input type="input" name="imagepng" placeholder="Añadir imagen png" />

        <label htmlFor="stock">Cantidad</label>
        <input
          type="number"
          name="stock"
          placeholder="Añadir cantidad de productos"
        />

        <label htmlFor="description">Descripción:</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          className="bg-white border max-h-60 min-h-60"
          placeholder="Descripción del producto..."
        ></textarea>
      </div>
    </section>
  );
}
