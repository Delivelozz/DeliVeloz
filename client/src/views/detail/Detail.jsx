import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container flex gap-10">
      <div className="max-w-md min-w-md">
        <img
          src="../../../img/hamburguesa.jpg"
          alt=""
          className="w-full rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl mb-6 text-sundown-500">{product.name}</h1>

        <div className="flex flex-col gap-2">
          <p>
            <span className="text-sundown-500 font-bold">Descripción: </span>
            {product.description}
          </p>

          <p>
            <span className="text-sundown-500 font-bold">Categoría: </span>
            {product.category}
          </p>

          <p>
            <span className="text-sundown-500 font-bold">Id: </span>
            {product.id}
          </p>
        </div>

        <p className="text-sundown-500 font-bold text-xl mt-6">
          $ {product.price}
        </p>
      </div>
    </div>
  );
}

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/products/${id}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       }

//     fetchProduct();
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div></div>
//       <h2>{product.name}</h2>
//       <p>Descripción: {product.description}</p>
//       <p>Precio: {product.price}</p>
//       <p>Categoría: {product.category}</p>
//       <p>Imagen: {product.image}</p>
//       <p>Disponibilidad: {product.availlability ? 'Disponible' : 'No disponible'}</p>
//     </div>
//   );
// }
