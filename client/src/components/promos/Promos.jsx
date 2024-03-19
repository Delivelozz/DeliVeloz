import React from "react";
import Promo from "../../components/promo/Promo.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Promos = (props) => {
  const { dishes } = props;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
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
  );
};

export default Promos;
