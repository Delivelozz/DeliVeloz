export default function Promo(props) {
  const { id, name, image, description } = props;
  return (
    <section className="ml-4">
      <article id={id} className="w-full relative">
        <div className="w-full h-[28rem] bg-white rounded-lg border p-4">
          <figure className="w-full h-1/2 rounded-md ">
            <img
              src={image}
              alt=""
              className="w-full h-full rounded-md object-cover"
            />
          </figure>
          <div className="w-full h-1/2">
            <div className="w-full flex flex-col my-2 gap-4">
              <h4 className="w-full truncate font-bold text-xl">{name}</h4>
              <p className="line-clamp-4">{description}</p>
            </div>
            <div className="flex justify-center mt-4">
              <button className="btn-bg">Check it!</button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
