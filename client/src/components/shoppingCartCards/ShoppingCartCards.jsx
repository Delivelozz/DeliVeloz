import React from "react";
import ShoppingCartCard from "../shoppingCartCard/ShoppingCartCard";

const shoppingCartCards = (props) => {
  const { shoppingCart } = props;
  return (
    <section className="container">
      <h1>Carrito</h1>
      <div className="flex flex-col gap-6">
        {shoppingCart?.map(({ id, name, price, image }) => (
          <ShoppingCartCard
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
          />
        ))}
      </div>
    </section>
  );
};

export default shoppingCartCards;
