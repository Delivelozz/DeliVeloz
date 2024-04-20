import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderIdAppi, postOrder } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";

const TotalAmount = () => {
  const shoppingCartDB = useSelector((state) => state.shoppingCartDB);
  const user = useSelector((state) => state.user);
  const [idUser, setIdUser] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [canGeneratePayment, setCanGeneratePayment] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIdUser(user?.user?.id);
  }, [user]);

  useEffect(() => {
    if (shoppingCartDB?.products?.length > 0) {
      setCanGeneratePayment(true);
    } else {
      setCanGeneratePayment(false);
    }
  }, [shoppingCartDB]);

  useEffect(() => {
    if (orderId !== null) {
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
          disabled={!canGeneratePayment}
        >
          Generar Pago
        </button>
        
      </div>
    </article>
  );
};

export default TotalAmount;
