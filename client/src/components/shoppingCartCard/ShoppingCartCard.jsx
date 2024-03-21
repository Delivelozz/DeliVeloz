import React from "react";

const shoppingCartCard = (props) => {
  const { id, name, price, image } = props;
  return (
    <article id={id} className="w-full">
      <div className="w-full h-24 bg-white rounded-lg border p-4">
        <figure>
          <img src="" alt="" />
        </figure>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </article>
  );
};

export default shoppingCartCard;
