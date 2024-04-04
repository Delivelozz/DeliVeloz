import React from "react";
import { useSelector, useDispatch } from "react-redux";

const TotalAmount = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  //console.log(shoppingCart);

  const totalpay = () =>
    shoppingCart.reduce((acc, item) => acc + item.priceTotal, 0).toFixed(2);

  return (
    <article className="container flex flex-col justify-center ">
      <div className=" w-full h-16 mt-6 p-4 bg-gray-100 rounded-lg border flex justify-between text-lg text-sundown-500 font-bold">
        <p className="flex items-center">Total a pagar: </p>
        <p className="flex items-center">${totalpay()}</p>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="btn-bg flex items-center justify-center">
          Pagar
        </button>
      </div>
    </article>
  );
};

export default TotalAmount;
