import { useState } from "react";
import Card from "../../components/card/Card.jsx";

export default function Cards(props) {
  const { dishes } = props;

  return (
    <section>
      <article className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dishes?.meals?.map(
          ({ strMeal, idMeal, strMealThumb, strMeasure6 }) => (
            <Card
              key={strMeal}
              id={idMeal}
              name={strMeal}
              image={strMealThumb}
              price={strMeasure6}
            />
          )
        )}
      </article>
    </section>
  );
}
