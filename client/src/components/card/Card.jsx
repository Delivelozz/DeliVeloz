import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShoppingCart } from "../../redux/actions/actions.js";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { id, name, image, price, category, subCategory } = props;
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);

  useEffect(() => {
    dispatch(setShoppingCart(shoppingCart));
  }, [shoppingCart, dispatch]);

  const addToCart = (id) => {
    const dataItem = { id, name, price, image };
    const addRes = [...shoppingCart];
    addRes.push(dataItem);
    dispatch(setShoppingCart(addRes));
    //console.log(shoppingCart);
  };

  return (
    <article id={id} className="w-full ">
      <div className="bg-white rounded-lg border flex flex-col gap-2 p-4">
        <Link to={`/detail/${id}`}>
          <figure className="w-full h-3/5 rounded-md cursor-pointer hover:text-black relative">
            <img
              src={image}
              alt={name}
              className="w-full mx-auto rounded-md object-cover max-h-32 min-h-32"
            />
            <div className="text-sm ml-1 mb-1 absolute bottom-0 left-0 ">
              <p className="bg-white/70 rounded-full px-1 mb-1">
                <span>Categoría: </span>
                {category}
              </p>
              <p className="bg-white/70 rounded-full px-1">
                <span>Subcategoría: </span>
                {subCategory}
              </p>
            </div>
          </figure>
        </Link>
        <div className="w-full flex justify-between ">
          <p className="w-4/6 truncate font-bold">{name}</p>
          <p className="text-sundown-500 font-bold ">$ {price}</p>
        </div>
        <div className="flex justify-center" onClick={() => addToCart(id)}>
          <button className="btn-bg ">Agregar</button>
        </div>
      </div>
    </article>
  );
}
