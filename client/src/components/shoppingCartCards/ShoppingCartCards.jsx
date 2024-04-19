import React from "react";
import ShoppingCartCard from "../shoppingCartCard/ShoppingCartCard";

const shoppingCartCards = (props) => {
  const { shoppingCart } = props;

  return (
    <article className="container">
      <div className="flex flex-col gap-6">
        {shoppingCart?.map(
          ({ id, name, price, image, quantity, quantity_stock }) => (
            <ShoppingCartCard
              key={id}
              id={id}
              name={name}
              image={image.jpg}
              price={price}
              qty={quantity}
              stock={quantity_stock}
            />
          )
        )}
      </div>
    </article>
  );
};

export default shoppingCartCards;
