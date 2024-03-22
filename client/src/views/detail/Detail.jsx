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

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container flex gap-10">
      <div className="max-w-md min-w-md">
        <img
          src={product.image.jpg}
          alt=""
          className="w-full rounded-md object-cover max-h-80 min-h-80"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl mb-6 text-sundown-500">{product.name}</h1>

        <div className="flex flex-col gap-2">
          <p>
            <span className="text-sundown-500 font-bold">Ingredientes: </span>
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
