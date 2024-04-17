import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../utils/constants";

const Mercadopago = ({ shoppingCartDB, onPaymentComplete }) => {
  //guardo el id en preferentceId y set me ayuda a guardar el estado
  console.log("shoppingCartDB in Mercadopago:", shoppingCartDB);

  const idOrder = useSelector((state) => state.idOrder);
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    initMercadoPago("TEST-bc727f75-9789-4717-9b6a-636604e99203", {
      locale: "es-AR",
    });
  }, []);
  //id de preferencia son los datos de nuestros productos

  const createPreference = async () => {
    try {
      const products = shoppingCartDB.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      }));

      const dataToSend = {
        product: products,
        id_order: idOrder,
      };

      const response = await axios.post(
        `${API_URL}/mercadopago/create_preference`,
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 200) {
        console.error(
          "Error en la solicitud POST:",
          response.status,
          response.statusText
        );
        return null;
      }

      const { id } = response.data;
      return id;
    } catch (error) {
      console.error("Error al crear la preferencia:", error);
    }
  };

  //invoco la funcion createPreference, si todo esta bien retornare el ID
  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      //console.log(id);
      setPreferenceId(id);
    }
  };

  useEffect(() => {
    handleBuy();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full sm:w-auto mt-4">
        {/*<div className="mt-6 flex justify-center">
            <button className="btn-bg flex items-center justify-center" onClick={handleBuy}>Ir a Billetera</button>
</div>*/}
        {preferenceId && (
          <Wallet
            initialization={{ preferenceId, redirectMode: "modal" }}
            customization={{ texts: { valueProp: "smart_option" } }}
            onComplete={() => onPaymentComplete()}
          />
        )}
      </div>
    </div>
  );
};

export default Mercadopago;
