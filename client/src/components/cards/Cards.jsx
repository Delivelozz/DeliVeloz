import { useState } from "react";
import Card from "../../components/card/Card.jsx";

export default function Cards(props) {
  // console.log("esto", props);
  const { dishes } = props;
  return (
    <article className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {dishes.map(
        ({ id, name, image, price, category, subCategory, quantity }) => (
          <Card
            key={id}
            id={id}
            name={name}
            image={image.jpg}
            price={price}
            category={category}
            subCategory={subCategory}
            stock={quantity}
          />
        )
      )}
    </article>
  );
}
