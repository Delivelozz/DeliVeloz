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

  console.log(product);
  //     useEffect(() => {
  //     const fetchProduct = async () => {
  //       try {
  //         const response = await axios.get(`http://localhost:3001/products/${id}`);
  //         setProduct(response.data);
  //       } catch (error) {
  //         console.error('Error fetching product:', error);
  //       }

  //     fetchProduct();
  //   }, [id])

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>hola</h1>
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
