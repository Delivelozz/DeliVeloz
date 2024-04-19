import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { setOrderIdAppi } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { postOrder } from "../../redux/actions/actions";

const TotalAmount = () => {
  const shoppingCartDB = useSelector((state) => state.shoppingCartDB);
  //console.log(shoppingCartDB);
  const user = useSelector((state) => state.user);
  const [idUser, setIdUser] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIdUser(user?.user?.id);
  }, [user]);

  useEffect(() => {
    if (orderId !== null) {
      //console.log("ID de la orden: ", orderId);
      dispatch(setOrderIdAppi(orderId));

      navigate("/orderUser");
    }
  }, [orderId]);

  const totalpay = () => {
    let total = 0;
    shoppingCartDB?.products?.map((product) => {
      total += product.price * product.quantity;
    });
    return total.toFixed(2);
  };

  const handlePayment = async () => {
    const total = parseFloat(totalpay());
    console.log("Total a pagar: ", total);
    console.log("Usuario: ", idUser);

    const payload = {
      idUser: idUser,
      total: total,
    };
    try {
      const response = await dispatch(postOrder(payload));
      setOrderId(response?.data?.id);
    } catch (error) {
      console.error("Error al procesar la orden: ", error);
    }
  };
  return (
    <article className="container flex flex-col justify-center ">
      <div className=" w-full h-16 mt-6 p-4 bg-gray-100 rounded-lg border flex justify-between text-lg text-sundown-500 font-bold">
        <p className="flex items-center">Total a pagar: </p>
        <p className="flex items-center">${totalpay()}</p>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          className="btn-bg flex items-center justify-center"
          onClick={handlePayment}
        >
          Generar Pago
        </button>
      </div>
    </article>
  );
};

export default TotalAmount;
