import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Mercadopago from "../mercadopago/Mercadopago";


const TotalAmount = () => {

  const shoppingCart = useSelector((state) => state.shoppingCart);
  //console.log(shoppingCart);
  
  const [showMercadoPago, setShowMercadoPago] = useState(false);

  const totalpay = () =>
    shoppingCart.reduce((acc, item) => acc + item.priceTotal, 0).toFixed(2);

  const handlePay = () => {
    setShowMercadoPago(true);
  }

  //chatgpi
  const handlePaymentComplete = () => {
    setShowMercadoPago(false); // Ocultar el componente de MercadoPago después de que se complete el pago
  };

  return (
    <article className="container flex flex-col justify-center ">
      <div className=" w-full h-16 mt-6 p-4 bg-gray-100 rounded-lg border flex justify-between text-lg text-sundown-500 font-bold">
        <p className="flex items-center">Total a pagar: </p>
        <p className="flex items-center">${totalpay()}</p>
      </div>
      <div className="mt-6 flex justify-center">
      {!showMercadoPago && ( // Mostrar el botón de pago solo si no se muestra el componente de MercadoPago
        <button  className="btn-bg flex items-center justify-center" onClick={handlePay}>
          Pagar
        </button>
       )}
      </div>
      {showMercadoPago && <Mercadopago shoppingCart={shoppingCart} onPaymentComplete={handlePaymentComplete} />} {/*para renderizar*/}
    </article>
  );
};

export default TotalAmount;
