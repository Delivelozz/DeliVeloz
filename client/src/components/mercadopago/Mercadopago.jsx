import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from "axios";
import { useState } from "react";

const Mercadopago = () => {
    //guardo el id en preferenceId y set me ayuda a guardar el estado
    const [preferenceId, setPreferenceId] = useState(null)

    initMercadoPago('TEST-bc727f75-9789-4717-9b6a-636604e99203',{
    locale: "es-AR",
});
//id de preferencia son los datos de nuestros productos
const createPreference = async () => {
    try{
        const response = await axios.post("https://deliveloz-ryfh.onrender.com/mercadopago/create_preference", [{
            name: "Hamburguesa",
            quantity: 1,
            price: 100,
        }]);
        //desestructuro id y lo retorno. id que viene del server
        const { id } = response.data;
        return id;

    }catch(error){
        console.log(error);
    }
};

//invoco la funcion createPreference, si todo esta bien retornare el ID
const handleBuy = async () => {
    const id = await createPreference();
    if(id){
        setPreferenceId(id);
    }
};

  return (
    <div>
        <div>
            <div>
                <img src='https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png' 
                alt='Product image' 
                />
                <h3>Hamburguesa</h3>
                <p>100 $</p>
                <button className="btn-bg " onClick={handleBuy}>Comprar</button>
                {preferenceId && <Wallet initialization={{ preferenceId, redirectMode: 'modal' }} customization={{ texts:{ valueProp: 'smart_option'}}} />}
                
            </div>
        </div>
    </div>
  )
}

export default Mercadopago