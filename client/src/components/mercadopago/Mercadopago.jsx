import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useDispatch } from "react-redux";
import { setShoppingCart } from "../../redux/actions/actions";
import axios from "axios";
import { useEffect, useState } from "react";

const Mercadopago = ({ shoppingCart }) => {
  //guardo el id en preferenceId y set me ayuda a guardar el estado
  const [preferenceId, setPreferenceId] = useState(null);
  const dispatch = useDispatch();

  initMercadoPago("TEST-bc727f75-9789-4717-9b6a-636604e99203", {
    locale: "es-AR",
  });
  //id de preferencia son los datos de nuestros productos
  const createPreference = async () => {
    try {
      const products = shoppingCart.map((item) => ({
        name: item.name,
        quantity: item.qty,
        price: item.price,
      }));

      const response = await axios.post(
        "https://deliveloz-ryfh.onrender.com/mercadopago/create_preference",
        products
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
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
    <div>
      <div>
        {/*<div className="mt-6 flex justify-center">
                <button className="btn-bg flex items-center justify-center" onClick={handleBuy}>Ir a Billetera</button>
  </div>*/}
        {preferenceId && (
          <Wallet
            initialization={{ preferenceId, redirectMode: "modal" }}
            customization={{ texts: { valueProp: "smart_option" } }}
          />
        )}
      </div>
    </div>
  );
};

export default Mercadopago;
