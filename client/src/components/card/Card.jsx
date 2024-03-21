import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShoppingCart } from "../../redux/actions/actions.js";

export default function Card(props) {
  const { id, name, image, price } = props;
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
    <article id={id} className="w-full relative">
      <div className="bg-white rounded-lg border p-4">
        <figure className="w-full h-3/5 rounded-md ">
          <img
            src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full rounded-md object-cover"
          />
        </figure>
        <div className="w-full flex justify-between my-2">
          <p className="w-4/6 truncate font-bold">{name}</p>
          <p className="text-sundown-500 font-bold ">$ {price}</p>
        </div>
        <button className="cursor-pointer absolute top-0 right-0 flex justify-center items-center bg-sundown-500 w-8 h-8 rounded-full text-white font-semibold -mr-3 -mt-3">
          i
        </button>
        <div className="flex justify-center" onClick={() => addToCart(id)}>
          <button className="btn-bg ">Agregar</button>
        </div>
      </div>
    </article>
  );
}
