import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SliderHome from "../../components/sliderHome/Slider";

export default function Home() {
  return (
    <section>
      <SliderHome />
      <div className="container">
        <h1 className="text-center text-xl">
          Nuestras <span className="text-sundown-500">Novedades</span>
        </h1>
      </div>
    </section>
  );
}
