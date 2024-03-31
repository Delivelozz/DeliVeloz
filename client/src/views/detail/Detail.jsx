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
    <div className="container flex gap-10 lg:w-3/5 lg:mb-80">
      <div className="w-1/2">
        <img
          src={product.image.jpg}
          alt=""
          className="w-full rounded-md object-cover max-h-80 min-h-80"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between ">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-xl mb-6 text-sundown-500">{product.name}</h1>
          <p>
            <span className="text-sundown-500 font-bold">Ingredientes: </span>
            {product.description}
          </p>
          <p>
            <span className="text-sundown-500 font-bold">Categoría: </span>
            {product.category}
          </p>
          <p className="text-sundown-500 font-bold text-xl ">
            $ {product.price}
          </p>
        </div>
        <div className="flex ">
          <button className="btn-bg ">Agregar</button>
        </div>
      </div>
    </div>
  );
}
