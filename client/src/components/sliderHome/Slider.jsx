import Slider from "react-slick";
import Pizza from "../../../img/pizzaB.jpg";
import Sandwitch from "../../../img/sandwitch.jpg";
import Hamburguesa from "../../../img/hamburguesa.jpg";

export default function SliderHome() {
  // ?---------------------------- Slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className=" mb-16 slider -mt-16">
      <Slider {...settings}>
        <div className="relative">
          <img
            src={Pizza}
            alt=""
            className="object-cover max-h-96 min-h-96 w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center flex-col text-white gap-3">
            <h1 className="text-5xl font-bold text-center">
              Las pizzas mas calientes llegan por DeliVeloz
            </h1>
            <p className="text-xl text-center">
              ¿Qué esperas para pedir el tuyo?
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={Sandwitch}
            alt=""
            className="object-cover max-h-96 min-h-96 w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center flex-col text-white gap-3">
            <h1 className="text-5xl font-bold text-center">
              Los sándwichs mas calientes llegan por DeliVeloz
            </h1>
            <p className="text-xl text-center">
              ¿Qué esperas para pedir el tuyo?
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={Hamburguesa}
            alt=""
            className="h-full object-cover max-h-96 min-h-96 w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center flex-col text-white gap-3">
            <h1 className="text-5xl font-bold text-center">
              Las Hamburguesas mas calientes llegan por DeliVeloz
            </h1>
            <p className="text-xl text-center">
              ¿Qué esperas para pedir el tuyo?
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
