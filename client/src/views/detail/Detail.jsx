// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// export default function FoodDetail() {

//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

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
