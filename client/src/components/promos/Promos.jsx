import React, { useState, useEffect } from "react";
import Promo from "../../components/promo/Promo.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector ,useDispatch } from "react-redux";
import { setBlogData } from "../../redux/actions/actions";


const Promos = (props) => {
  const { dishes } = props;
  const [slidesToShow, setSlidesToShow] = useState(3);

  const dispatch = useDispatch();
  const blog = useSelector(state => state.blog)

  useEffect(() => {
      dispatch(setBlogData());
  }, [dispatch]);
  //console.log("blog:", blog)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function handleScreenResize(e) {
      if (e.matches) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    }

    handleScreenResize(mediaQuery);
    mediaQuery.addEventListener("change", handleScreenResize);
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
        {blog.map((blogItem, index) => (
          <Promo
            key={index}
            id={blogItem.id}
            name={blogItem.title}
            image={blogItem.image.jpg}
            description={blogItem.description}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Promos;
