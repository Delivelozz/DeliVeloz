import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
//import Mercadopago from "../mercadopago/Mercadopago";
import { Link, useNavigate } from "react-router-dom";
import { postOrder } from "../../redux/actions/actions";

const TotalAmount = () => {
  const shoppingCartDB = useSelector((state) => state.shoppingCartDB);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //const [showMercadoPago, setShowMercadoPago] = useState(false);

  const totalpay = () => {
    let total = 0;
    shoppingCartDB?.products?.map((product) => {
      total += product.price * product.quantity;
    });
    return total.toFixed(2);
  };

  const handlePayment = async () => {
    // Obtén el total a pagar
    const total = parseFloat(totalpay());

    const userId = "tuUserId"; // Reemplázalo con el método correcto para obtener el userId

    // Crea el payload con los datos necesarios
    const payload = {
      userId: userId,
      total: total,
    };
    await dispatch(postOrder(payload));

    // Redirige al usuario a orderUser
    navigate("/orderUser");
  };

  return (
    <article className="container flex flex-col justify-center ">
      <div className=" w-full h-16 mt-6 p-4 bg-gray-100 rounded-lg border flex justify-between text-lg text-sundown-500 font-bold">
        <p className="flex items-center">Total a pagar: </p>
        <p className="flex items-center">${totalpay()}</p>
      </div>
      <button
        className="btn-bg flex items-center justify-center"
        onClick={handlePayment}
      >
        Pagar
      </button>
    </article>
  );
};

export default TotalAmount;
