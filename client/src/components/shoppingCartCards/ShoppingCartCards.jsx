import React from "react";
import ShoppingCartCard from "../shoppingCartCard/ShoppingCartCard";

const shoppingCartCards = (props) => {
  const { shoppingCart } = props;

  return (
    <article className="container">
      <div className="flex flex-col gap-6">
        {shoppingCart?.map(({ id, name, price, image, qty, priceTotal }) => (
          <ShoppingCartCard
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
            qty={qty}
            priceTotal={priceTotal}
          />
        ))}
      </div>
    </article>
  );
};

export default shoppingCartCards;
