import React, { useState, useEffect } from "react";
import Promo from "../../components/promo/Promo.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Promos = (props) => {
  const { dishes } = props;
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function handleScreenResize(e) {
      if (e.matches) {
        // Screen is medium
        setSlidesToShow(1);
      } else {
        // Screen is not medium
        setSlidesToShow(3);
      }
    }

    // Call once to set initial state based on screen width
    handleScreenResize(mediaQuery);

    // Add listener to handle changes in screen size
    mediaQuery.addEventListener("change", handleScreenResize);

    // Clean up listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleScreenResize);
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="carrousel">
      <Slider {...settings}>
        {props.dishes?.meals?.map(
          ({ strMeal, idMeal, strMealThumb, strInstructions }) => (
            <Promo
              key={strMeal}
              id={idMeal}
              name={strMeal}
              image={strMealThumb}
              description={strInstructions}
            />
          )
        )}
      </Slider>
    </div>
  );
};

export default Promos;
