export default function Promo(props) {
  const { id, name, image, description } = props;
  return (
    <section>
      <article id={id} className="w-full relative">
        <div className="w-full h-[34rem] bg-white rounded-lg border p-4">
          <figure className="w-full h-2/3 rounded-md ">
            <img
              src={image}
              alt=""
              className="w-full h-full rounded-md object-cover"
            />
          </figure>
          <div className="w-full h-1/3">
            <div className="w-full flex flex-col my-2">
              <p className="w-full truncate font-bold">{name}</p>
              <p className="line-clamp-4">{description}</p>
            </div>
            <div className="flex justify-center">
              <button className="btn-bg ">Check it!</button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
